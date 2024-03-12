import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-dropdown-button',
  standalone: true,
  imports: [],
  template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class DropdownButtonComponent {
  @ViewChild(TemplateRef) labelContent!: TemplateRef<any>;
}
