import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-dynamic-tab-label',
  standalone: true,
  imports: [],
  template: '<ng-template><ng-content ></ng-content></ng-template>'
})
export class DynamicTabLabelComponent {
  @ViewChild(TemplateRef) labelContent!: TemplateRef<any>;
}
