import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-tab-content-body',
  standalone: true,
  imports: [],
  template:'<ng-template><ng-content></ng-content></ng-template>',
})
export class TabContentBodyComponent {
  @ViewChild(TemplateRef) bodyContent!: TemplateRef<any>;
}
