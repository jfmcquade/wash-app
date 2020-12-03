import * as fs from "fs-extra";
import * as xlsx from "xlsx";
import * as path from "path";
import chalk from "chalk";
import { ConversationParser, DefaultParser } from "./parsers";
import { groupJsonByKey, recursiveFindByExtension } from "../utils";
import { IContentFlow, IContentList } from "./types";
import { IFlowType } from "./types";

const INPUT_FOLDER = path.join(__dirname, "../gdrive-download/output");
const OUTPUT_FOLDER = `${__dirname}/output`;

/**
 * Reads xlsx files from gdrive-download output and converts to json
 * objects representing sheet names and data values
 */
async function main() {
  console.log(chalk.yellow("Converting PLH Data"));
  fs.ensureDirSync(INPUT_FOLDER);
  fs.ensureDirSync(OUTPUT_FOLDER);
  fs.emptyDirSync(OUTPUT_FOLDER);
  const xlsxFiles = listFilesForConversion(INPUT_FOLDER);

  const combined: { json: any; xlsxPath: string }[] = [];
  for (let xlsxPath of xlsxFiles) {
    const json = convertXLSXSheetsToJson(xlsxPath);
    combined.push({ json, xlsxPath });
  }
  // merge and collage plh data
  const merged = mergePLHData(combined);
  const dataByFlowType = groupJsonByKey(merged, "flow_type");
  const convertedData = applyDataParsers(dataByFlowType as any);
  // write to output files
  Object.entries(convertedData).forEach(([key, value]) => {
    const outputJson = JSON.stringify(value, null, 2);
    fs.writeFileSync(`${OUTPUT_FOLDER}/${key}.json`, outputJson);
  });
  console.log(chalk.yellow("Conversion Complete"));
}
main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => console.log(chalk.green("PLH Data Converted")));

function applyDataParsers(dataByFlowType: { [type in IFlowType]: IContentFlow[] }) {
  const parsers: { [flowType: string]: DefaultParser } = {
    Conversation: new ConversationParser(),
  };
  const convertedData = {};
  console.log("keys", Object.keys(dataByFlowType));
  Object.entries(dataByFlowType).forEach(([key, contentFlows]) => {
    if (parsers.hasOwnProperty(key)) {
      convertedData[key] = contentFlows.map((flow) => parsers[key].convert(flow));
    } else {
      console.log(chalk.gray("no conversion required:", key));
      convertedData[key] = contentFlows;
    }
  });
  return convertedData;
}

/**
 * PLH sheets contain contents page with metadata that can be merged into regular data
 * Merge and collate with other existing data, warning in case of overwrites
 * @returns - array of all merged sheets (no grouping or collating)
 */
function mergePLHData(jsons: { json: any; xlsxPath: string }[]) {
  const merged: { [flow_name: string]: IContentFlow } = {};
  const releasedSummary = {};
  const skippedSummary = {};
  console.log("merging", jsons.length);
  for (let el of jsons) {
    const { json, xlsxPath } = el;
    const contentList = json["==content_list=="] as IContentList[];
    if (contentList) {
      for (const contents of contentList) {
        const { flow_name, status, flow_type, Module } = contents;
        // only include flows marked as released in the contents
        if (flow_name && status === "released") {
          console.log(flow_name);
          releasedSummary[flow_name] = { status, flow_type, Module };
          if (json.hasOwnProperty(flow_name)) {
            if (merged.hasOwnProperty(flow_name)) {
              console.log(chalk.yellow("duplicate flow:", flow_name));
            }
            // console.log(chalk.green("+", flow_name));
            merged[flow_name] = { ...contents, data: json[flow_name] };
          } else {
            console.log(chalk.red("No Contents:", flow_name));
          }
        } else {
          skippedSummary[flow_name] = { status, flow_type, Module };
        }
      }
    } else {
      console.log(chalk.red(`No Content List: ${path.basename(xlsxPath)}`));
    }
  }
  console.log(chalk.blue("Skipped"));
  console.table(skippedSummary);
  console.log(chalk.blue("App Data"));
  console.table(releasedSummary);
  return Object.values(merged);
}

/**
 * Parses an xlsx file, returning an object with sheet names as keys
 * and a corresponding array of key-value pairs to represent the sheet data
 * (assumes header provided in top row)
 */
function convertXLSXSheetsToJson(xlsxFilePath: string) {
  const json = {};
  const workbook = xlsx.readFile(xlsxFilePath);
  const { Sheets } = workbook;
  Object.entries(Sheets).forEach(([sheetName, worksheet]) => {
    json[sheetName] = xlsx.utils.sheet_to_json(worksheet);
  });
  return json;
}

/**
 * Read all xlsx files in the function xlsx folder (ignoring temp files and anything in an 'old' directory)
 * @returns filenames of xlsx files in given folder
 */
function listFilesForConversion(folderPath: string) {
  return recursiveFindByExtension(folderPath, "xlsx").filter(
    (f) =>
      // ignore temp files and anything in an 'old' directory
      !f.startsWith("~$") &&
      !f
        .split(path.sep)
        .map((p) => p.toLowerCase())
        .includes("old")
  );
}
