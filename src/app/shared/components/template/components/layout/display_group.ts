import { Component, OnInit } from "@angular/core";
import { TemplateBaseComponent } from "../base";

@Component({
  selector: "plh-tmpl-display-group",
  template: `<div [ngStyle]="styleList" class="display-group">
    <plh-template-component
      *ngFor="let childRow of _row.rows"
      [row]="childRow"
      [parent]="parent"
    ></plh-template-component>
  </div>`,
  styleUrls: ["../tmpl-components-common.scss"],
})
export class TmplDisplayGroupComponent extends TemplateBaseComponent implements OnInit {
  styleList: any;
  ngOnInit() {
    console.log("display group init", this._row);
  }
}
