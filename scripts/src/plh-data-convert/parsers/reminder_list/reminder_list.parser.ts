import chalk from "chalk";
import { FlowTypes } from "../../../../types";
import { DefaultParser } from "../default/default.parser";

export class ReminderListParser extends DefaultParser {
  constructor() {
    super();
  }
  postProcess(row: FlowTypes.Reminder_listRow) {
    // extract piped conditions
    const activationConditions = row.activation_condition_list as any[];
    row.activation_condition_list = activationConditions.map((c) => extractConditionList(c));
    const deactivationConditions = row.deactivation_condition_list as any[];
    row.deactivation_condition_list = deactivationConditions.map((c) => extractConditionList(c));
    return row;
  }
}

/**
 * Take an activation or deactivation criteria and format for use
 * @param c condition string formatted with pipe characters to separate action | value | timings
 * @example
 * ```
 * event_completed | first_app_launch | delay_1_day
 * ```
 */
function extractConditionList(conditionText: string) {
  conditionText = _replaceShorthandText(conditionText);
  let [actionStr, value, timingStr] = conditionText.split("|").map((s: string) => s.trim());
  const [action, entry] = actionStr.split(":").map((s) => s.trim() as any);
  let timing: FlowTypes.Reminder_conditionList["timing"] = null;
  if (timingStr) {
    const [comparatorText, quantity, unit] = timingStr.split(":").map((s: string) => s.trim());
    const comparator = _extractComparator(comparatorText);
    timing = { comparator, quantity: quantity ? Number(quantity) : null, unit } as any;
  }
  const condition: FlowTypes.Reminder_conditionList = { action, value, entry, timing };
  Object.values(condition).forEach((v) => {
    if (typeof v === "string" && v.includes(":")) {
      console.error(chalk.red(`condition not fully parsed: ${conditionText}`));
      console.error(condition);
      console.error(chalk.red(v));
      process.exit(1);
    }
  });
  return condition;
}

/**
 * some common authoring scenarios have been reduced to single keywords for ease-of-authoring
 * replace these with full specifications
 */
function _replaceShorthandText(text: string) {
  // a maximum of 1 replacement will be made, so order in terms of specifivity
  const shorthandReplacements = {
    sent: "reminder_action | sent",
    first_launch: "app_event:first | app_launch",
    app_launch: "app_event | app_launch",
  };
  Object.entries(shorthandReplacements).some(([original, replacement]) => {
    // use a regular expression to prevent matching words that have additional content before
    // e.g. app_launch should not match on first_app_launch (start of string regex)
    const regex = new RegExp(`^${original}`);
    text = text.replace(regex, replacement);
    // if a match has been found return a true value so that future matches are not made
    // (e.g. prevent app_launch match running after first_launch match)
    return regex.test(text);
  });
  return text;
}

/**
 * When timing conditions are specified related to a reminder, the condition should be specified
 * with leading text such as before_3_day or after_2_day.
 * Convert the text into a logical comparator that will be used during evaluation
 */
function _extractComparator(
  text: string
): FlowTypes.Reminder_conditionList["timing"]["comparator"] {
  // when comparing, the target evaluation value will be compared relative to todays date / app day
  // first the difference between the target event and today is calculated, called diffInDays (app or calendar)
  // for an event to happen n days before (or more), diffInDays > n
  // for an event to happen within n days, diffInDays <= n
  switch (text) {
    case "before":
      return ">";
    case "within":
      return "<=";
    default:
      console.error(chalk.red(`Reminder timing comparison not defined: ${text}`));
      process.exit(1);
  }
}
