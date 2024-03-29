import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-dynamic-tab-body',
  standalone: true,
  imports: [],
  template:'<ng-template><ng-content></ng-content></ng-template>'
})
export class DynamicTabBodyComponent {
  @ViewChild(TemplateRef) bodyContent!: TemplateRef<any>;
}
