import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { takeUntil, takeWhile } from "rxjs/operators";
import { BehaviorSubject, Subject } from "scripts/node_modules/rxjs";
import { TEMPLATE } from "../../services/data/data.service";
import { FlowTypes, ITemplateContainerProps } from "./models";
import { TemplateNavService } from "./services/template-nav.service";
import { TemplateVariablesService } from "./services/template-variables.service";
import { TemplateService } from "./services/template.service";

/** Logging Toggle - rewrite default functions to enable or disable inline logs */
let SHOW_DEBUG_LOGS = true;
let log = SHOW_DEBUG_LOGS ? console.log : () => null;
let log_group = SHOW_DEBUG_LOGS ? console.group : () => null;
let log_groupEnd = SHOW_DEBUG_LOGS ? console.groupEnd : () => null;

interface IOverride {
  [name: string]: {
    [override_key: string]: any;
    rows?: IOverride;
    _processed?: boolean;
  };
}

@Component({
  selector: "plh-template-container",
  templateUrl: "./template-container.component.html",
  styleUrls: ["./template-container.component.scss"],
})
export class TemplateContainerComponent
  implements OnInit, OnDestroy, AfterViewInit, ITemplateContainerProps {
  /** unique instance_name of template if created as a child of another template */
  @Input() name: string;
  /** flow_name of template for lookup */
  @Input() templatename: string;
  @Input() parent?: TemplateContainerComponent;
  @Input() row?: FlowTypes.TemplateRow;
  children: { [name: string]: TemplateContainerComponent } = {};

  /** Templates may inherit variables from a parent for initialisation.
   * If set from a row keeps full reference to row, if set as a value will only have {value} field */
  localVariables: any = {};

  /** declared properties to be inherited by child templates during their own initialisation
   * maybe declared 1 or more levels deep (e.g. templateA.templateB.templateC) */
  childOverrides: IOverride;

  /** overrides applying to this specific template rows */
  templateRowOverrides: IOverride;

  template: FlowTypes.Template;

  /** track path to template from top parent (not currently used) */
  templateBreadcrumbs: string[] = [];
  componentDestroyed$ = new Subject();
  debugMode: boolean;
  private actionsQueue: FlowTypes.TemplateRowAction[] = [];
  private actionsQueueProcessing$ = new BehaviorSubject<boolean>(false);

  onlyOneChild: boolean;

  constructor(
    private templateService: TemplateService,
    private templateVariables: TemplateVariablesService,
    public router: Router,
    public route: ActivatedRoute,
    public elRef: ElementRef,
    private templateNavService: TemplateNavService
  ) {}

  async ngOnInit() {
    this.subscribeToQueryParamChanges();
    // add logging if default disabled
    if (this.debugMode) {
      this.setLogging(true);
    }
    this.renderTemplate();
  }

  // TODO - CC 2021-04-19 - code can likely be tidied (just use the rows length instead of new variable)
  ngAfterViewInit(): void {
    this.onlyOneChild = this.template?.rows?.length === 1;
    if (this.onlyOneChild) {
      this.elRef.nativeElement.style.setProperty("height", "100%");
    }
  }

  ngOnDestroy(): void {
    // allow any subscriptions to be removed by binding to these events (avoid memory leak)
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.unsubscribe();
  }

  /***************************************************************************************
   *  Action Handling
   **************************************************************************************/
  /** Public method to add actions to processing queue and process */
  public async handleActions(
    actions: FlowTypes.TemplateRowAction[] = [],
    _triggeredBy: FlowTypes.TemplateRow
  ) {
    const unhandledActions = await this.handleActionsInterceptor(actions);
    unhandledActions.forEach((action) => this.actionsQueue.push({ ...action, _triggeredBy }));
    const res = await this.processActionQueue();
    await this.handleActionsCallback([...unhandledActions], res);
    if (!this.parent) {
      await this.templateNavService.handleNavActionsFromChild(actions, this);
    }
  }
  /** Optional method child component can add to handle post-action callback */
  public async handleActionsCallback(actions: FlowTypes.TemplateRowAction[], results: any) {}

  /** Optional method child component can filter action list to handle outside of default handlers */
  public async handleActionsInterceptor(
    actions: FlowTypes.TemplateRowAction[]
  ): Promise<FlowTypes.TemplateRowAction[]> {
    return actions;
  }

  /**
   * To avoid actions potentially trying to write to same db records at the same time,
   * all actions are added to a queue and processed in order of addition
   */
  private async processActionQueue() {
    const processedActions = [];
    // start the queue if it is not already running
    if (!this.actionsQueueProcessing$.value) {
      log_group(`Process Actions - ${this.name}`, [...this.actionsQueue]);
      this.actionsQueueProcessing$.next(true);
      while (this.actionsQueue.length > 0) {
        const action = this.actionsQueue[0];
        await this.processAction(action);
        this.actionsQueue.shift();
        processedActions.push(action);
      }
      this.actionsQueueProcessing$.next(false);
      log_groupEnd();
    }
    // resolve once full queue processed
    await this.actionsQueueProcessing$.pipe(takeWhile((v) => v === true)).toPromise();
    // once all actions have been processed re-render rows
    if (processedActions.length > 0) {
      log("[Actions Trigger Row Reprocess]");
      this.processRowUpdates();
    }
  }
  private async processAction(action: FlowTypes.TemplateRowAction) {
    let { action_id, args } = action;
    let [key, value] = args;

    switch (action_id) {
      case "set_local":
        log("[SET LOCAL]", { key, value });
        return this.setLocalVariable(key, value);
      case "set_global":
        log("[SET GLOBAL]", key, value);
        return this.templateService.setGlobal(key, value);
      case "go_to":
        return this.templateNavService.handleNavAction(action, this);
      case "pop_up":
        return this.templateNavService.handlePopupAction(action, this);
      case "set_field":
        log("[SET FIELD]", key, value);
        return this.templateService.setField(key, value);
      case "set_theme":
        return this.templateService.setTheme(this.template, "set_theme", action.args);
      case "emit":
        const [emit_value, emit_from] = args;
        let container: TemplateContainerComponent = this;
        if (emit_from) {
          // emit from the named template container instead of this one if specified (assumed sibling of current)
          const targetContainer = container.children[emit_from];
          if (targetContainer) {
            action.args = [emit_value];
            container = targetContainer;
          }
        }
        let { parent, row, name, template } = container;
        if (emit_value === "completed") {
          // write completions to the database for data tracking
          await this.templateService.recordEvent(template, "emit", emit_value);
        }
        if (parent) {
          // continue to emit any actions to parent where defined
          log(
            "Emiting",
            emit_value,
            ` from ${row?.name || "(no row)"} to parent ${parent?.name || "(no parent)"}`,
            parent
          );
          if (row && row.action_list) {
            const actionsForEmittedEvent = row.action_list.filter((a) => a.trigger === emit_value);
            log("Excuting actions matching event ", { emit_value, actionsForEmittedEvent });
            // process in parallel, do not return/await

            // TODO - check if should be parent row or current row
            parent.handleActions(actionsForEmittedEvent, row);
          } else {
            log("No action list for row ", row, "on template name ", name);
            parent.handleActions([action], row);
          }
        }
        break;
      default:
        console.warn("No handler for action", { action_id, args });
        return;
    }
  }

  /**
   * When a child triggers the changing of a local variable... TODO
   */
  public setLocalVariable(name: string, value: any) {
    this.localVariables[name] = { value } as FlowTypes.TemplateRow;

    // TODO - cross-reference any children that have dynamic row referencing this variable
  }

  /**
   * When actions have triggered updates this method is called to handle updating the current template
   *
   * TODO - parent overrides may have changed, so need way to determine which to process or not
   * (possibly tracking list of actions or checking previous parent overrides vs current)
   *
   * Or possibly passing more information into the template row (e.g. do initial template lookup)
   * from within begin_template block and merge with child overrides before render
   *
   * TODO - Design more efficient way to determine if re-rendering necessary
   */
  public processRowUpdates() {
    console.warn("Reprocessing rows following action - NOTE this method requires review");

    console.group(`[Reprocess Template]`, this.name);
    this.template.rows = [...this.processRows(this.template.rows, this.template)];
    console.groupEnd();
    // Note -

    // force children to re-render ?
    // TODO - could have lots of knock-ons, need better way to cache localVariables and
    // parent overrides that will determine changes
  }

  /***************************************************************************************
   *  Template Initialisation
   **************************************************************************************/

  private renderTemplate() {
    // Lookup template
    const foundTemplate: FlowTypes.Template = TEMPLATE.find(
      (t) => t.flow_name === this.templatename
    );
    if (foundTemplate) {
      // create a deep clone of the object to prevent accidental reference changes
      const template = JSON.parse(JSON.stringify(foundTemplate));
      // if template created at top level also ensure it has a name
      this.name = this.name || this.templatename;
      // keep track of path to this template from any parents
      this.templateBreadcrumbs = [...(this.parent?.templateBreadcrumbs || []), this.name];
      log_group(`[Template] Init -`, this.name, { template: { ...template }, ctxt: { ...this } });
      template.rows = this.processParentOverrides(template.rows);
      template.rows = this.processRows(template.rows, template);
      this.template = template;
      log("[Template] Render", { ...template });
      // if a parent exists also provide parent reference to this as a child
      if (this.parent) {
        this.parent.children[this.name] = this;
      }
      log_groupEnd();
    }
    // Template not found
    else {
      console.warn(`[Template] - Not Found -`, { ...this });
      this.template = NOT_FOUND_TEMPLATE(this.templatename);
    }
  }

  /**
   * Lookup list of template row overrides from parent and use to merge into existing rows
   */
  private processParentOverrides(rows: FlowTypes.TemplateRow[]) {
    const parentOverrides = this.parent?.childOverrides || {};
    // Note - we only care about the nested row overrides as top-level overrides (e.g. value, action_list)
    // will have been handled by the parent that first processed the begin_template row
    this.templateRowOverrides = parentOverrides[this.name]?.rows;
    if (this.templateRowOverrides) {
      log("[Overrides Start]", { overrides: { ...this.templateRowOverrides }, rows: { ...rows } });
      // apply any existing overrides for each row
      rows = rows.map((row) => this.processParentRowOverride(row));
      const unprocessedOverrides = Object.values(this.templateRowOverrides).filter(
        (override) => !override._processed
      );
      // log any unprocessed overrides and set as variables by default
      if (unprocessedOverrides.length > 0) {
        console.warn("Overrides could not find target row; Assuming set_variables", {
          unprocessedOverrides,
          rows: { ...rows },
        });
        unprocessedOverrides.forEach((override) => {
          rows.unshift({ ...override, type: "set_variable" } as any);
        });
      }
      log("[Overrides End]", { rows: { ...rows } });
    } else {
      log("[Overrides Skip]", { parentOverrides });
    }

    // Nested overrides are written in namespaced way (e.g. template_a.template_b.template_c)
    // Extract list of overrides that apply only within this namespace, rename nesting accordingly
    // and pass for use by children
    const childOverrides = {};
    Object.keys(parentOverrides).forEach((key) => {
      if (key.startsWith(`${this.name}.`)) {
        const newNamespace = key.replace(`${this.name}.`, "");
        if (parentOverrides.hasOwnProperty(newNamespace)) {
          console.warn("Overrides will have conflicting namespace", { ...parentOverrides });
        }
        childOverrides[newNamespace] = parentOverrides[key];
      }
    });
    this.childOverrides = childOverrides;
    return rows;
  }

  /**
   *  Lookup any overrides for a row or a row's nested child rows and apply
   */
  private processParentRowOverride(row: FlowTypes.TemplateRow) {
    if (row.name) {
      const override = this.templateRowOverrides[row.name];
      if (override) {
        log("[Override]", { override, row: { ...row } });
        Object.keys(override).forEach((field) => {
          switch (field) {
            case "rows":
              console.warn("Unexpected nested rows found for override", { ...override });
              break;
            case "type":
              // type shouldn't be processed as will be incorrect (always set_variable)
              console.warn("Unexpected type found for override", { ...override });
              break;
            default:
              row[field] = override[field];
              if (row._dynamicFields && row._dynamicFields.hasOwnProperty(field)) {
                delete row._dynamicFields[field];
              }
              break;
          }
        });
        // keep track of which overrides have been applied for debugging purposes
        this.templateRowOverrides[row.name]._processed = true;
      }
    }
    if (row.rows) {
      row.rows = row.rows.map((nestedRow) => this.processParentRowOverride(nestedRow));
    }
    return row;
  }

  /**
   * Process the main template rows, filtering by condition, processing variables
   * and extracting template references for child overrides
   *
   * @param template used only during dynamic row evaluation for sibling lookup
   * @param skipVars if processing rows for use in the a nested template, specify
   * skipVars to prevent the variables being processed within the current template
   *
   */
  private processRows(
    rows: FlowTypes.TemplateRow[],
    template: FlowTypes.Template,
    skipVars = false
  ) {
    log("[Process Rows Start]", [...rows]);
    const processedRows = [];
    rows.forEach((row) => {
      const { name, value, condition, hidden, type } = row;
      log("[Row start]", name, { ...row });

      // Evaluate row variables in context of current local state
      const evalContext = { localVariables: this.localVariables, template, row };
      row = this.templateVariables.evaluatePLHData(row, evalContext);

      // Filter out if specified by condition. This might be string or boolean
      // depending on the parser and related calculations (so check for both)
      if (condition === (false as any) || condition === "false") {
        // stop processing row (will not be rendered)
        row.condition = "false";
        log("[Row end (skip)]", name);
        return row;
      }

      // Make type assigned to hidden consistend
      if (hidden === (true as any) || hidden === "true") {
        row.hidden = "true";
      }

      // Update local variables where specified and filter out if
      // processing for use in local template (not skipVars for child)
      if (type === "set_variable" && !skipVars) {
        this.localVariables[name] = row;
        log("[Row end (set)]", name);
        // remove so that the same initialisation won't happen again on re-render
        return;
      }

      // Handle rows that set external data and filter out
      // TODO - confirm no other externally processed rows
      if (type === "set_field") {
        console.warn("Setting fields from template rows is not advised", { ...row });
        log("[Row end (set)]", name);
        return this.templateService.setField(name, value);
      }

      // Process child rows, ignoring set_variable statement if row type
      // will be used as part of child template overrides
      if (row.hasOwnProperty("rows")) {
        skipVars = ["template", "nested_properties"].includes(row.type);
        row.rows = this.processRows(row.rows, template, skipVars);
      }

      // Generate data to pass to child template where defined
      if (type === "template") {
        row = this.processTemplateRow(row);
      }
      log("[Row end (push)]", name, { ...row });
      processedRows.push(row);
    });
    log("[Process Rows End]", [...processedRows]);
    return processedRows;
  }

  /**
   * When a begin_template row is found we want to extract the full list of information
   * to the child instance once rendered, merging overrides defined in the current
   * row with any overrides defined via nested_properties in parent templates
   */
  private processTemplateRow(row: FlowTypes.TemplateRow) {
    const previousOverrides = { ...this.childOverrides };
    log(`[Template Row Start] - ${row.name}`, { previousOverrides, row: { ...row } });

    const newOverrides = this.extractRowOverrideTree(row);
    log("new overrides to merge with previous", { ...newOverrides });

    const mergedOverrides = newOverrides;
    Object.entries(previousOverrides).forEach(([key, previousOverride]) => {
      const newOverride = newOverrides[key];
      if (newOverride) {
        // override secondary field with previousOverride-secondary merge
        mergedOverrides[key] = this.mergeOverrideRows(previousOverride, newOverride);
      } else {
        // add new properties to secondary
        mergedOverrides[key] = previousOverride;
      }
    });
    if (mergedOverrides[row.name]) {
      // apply top-level overrides to row (e.g. value, action_list)
      row = { ...row, ...(mergedOverrides[row.name] as any) };
    }

    // Pass row overrides for use later
    // TODO - each of these fields only needs the nested [.rows] property saved (top level added to row above)
    this.childOverrides = mergedOverrides;

    log(`[Template Row End] - ${row.name}`, { ...mergedOverrides });
    // remove the child rows from further processing in this template
    // TODO - confirm if this is actually useful to do - Might be better to let rows
    // pass to child and just process from there
    row.rows = [];
    return row;
  }

  /** Merge override entries by keeping all primary columns, adding secondary columns, and merging primary-secondary rows */
  private mergeOverrideRows(primary: IOverride, secondary: IOverride) {
    return {
      ...secondary,
      ...primary,
      rows: {
        ...secondary.rows,
        ...primary.rows,
      },
    };
  }

  /**
   * When a row defines a template, extract a set of properties to pass to that template when it is later rendered
   * Also requires extracting any properties that will be passed to a child of that template (via nested_properties)
   * and defining within its own namespace to be inherited by the future template.
   * @see ./mocks/nested-templates.mock.ts for examples of implementation
   *
   * @param row row containing overrides, either the initial 'template' row or a child 'nested_properties' row
   * @param tree current override tree, used when calling recursively to define nested trees
   * @param namespace prefix used to define the current tree level, either the current template name or path to nested template
   */
  private extractRowOverrideTree(
    row: FlowTypes.TemplateRow,
    tree: IOverride = {},
    namespace?: string
  ): IOverride {
    log("[Tree Extract Start]", { row: { ...row }, tree: { ...tree } });
    // use a new object so that 'delete' operations are not accidentally passed back (could use different variable name)
    row = { ...row };
    namespace = namespace || row.name;
    const { name, rows } = row;
    delete row.type; // we cannot currently override a row type (as blank rows interpreted as set_variable which might not be correct)
    delete row._dynamicFields; // remove references to dynamic fields calculated from the current template when inherited
    if (name) {
      tree[namespace] = { ...row } as any;
      if (rows) {
        tree[namespace].rows = {};
        // repeat above process for nested_properties, which form their own namespaced trees
        rows.forEach((r) => {
          r = { ...r };
          const nestedName = r.name;
          const nestedType = r.type;
          delete r.type;
          delete r._dynamicFields;
          if (nestedType === "nested_properties") {
            log("[Nested Properties]", { ...r });
            const nestedTemplate: FlowTypes.TemplateRow = { ...r, name: nestedName };
            const nestedNamespace = `${namespace}.${nestedName}`;
            tree = this.extractRowOverrideTree(nestedTemplate, tree, nestedNamespace);
          } else {
            if (r.rows) {
              console.warn("Nested rows not expected during extract, Requires review", { ...r });
            }
            tree[namespace].rows[r.name] = r as any;
          }
        });
      }
    }
    log("[Tree Extract End]", { ...tree });
    return tree;
  }

  /**
   * When using ngFor loop track by to ensure updates correctly propagated on change
   * Most important is to keep track of row value as updates to this will want UI refresh
   */
  public trackByRow(index: number, row: FlowTypes.TemplateRow) {
    return `${row.name}-${row.value}-${index}`;
  }

  /** Query params are used to track state across navigation events */
  private subscribeToQueryParamChanges() {
    this.route.queryParams
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(async (params: any) => {
        this.debugMode = params.debugMode ? true : false;
        // allow templateNavService to process actions based on query param change
        await this.templateNavService.handleQueryParamChange(params, this);
      });
  }

  private setLogging(showLogs: boolean) {
    SHOW_DEBUG_LOGS = showLogs;
    log = SHOW_DEBUG_LOGS ? console.log : () => null;
    log_group = SHOW_DEBUG_LOGS ? console.group : () => null;
    log_groupEnd = SHOW_DEBUG_LOGS ? console.groupEnd : () => null;
  }
}

/** helper function used for dev to wait a fixed amount of time */
function _wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const NOT_FOUND_TEMPLATE = (name: string): FlowTypes.Template => ({
  flow_name: "Template_not_found",
  flow_type: "template",
  rows: [{ type: "title", value: `Template "${name}" not found` }],
  status: "released",
});
