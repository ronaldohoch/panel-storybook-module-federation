import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-tab-content-label',
  standalone: true,
  imports: [],
  template: '<ng-template><ng-content ></ng-content></ng-template>'
})
export class TabContentLabelComponent {
  @ViewChild(TemplateRef) labelContent!: TemplateRef<any>;
}
