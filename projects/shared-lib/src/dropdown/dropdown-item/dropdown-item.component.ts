import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-dropdown-item',
  standalone: true,
  imports: [],
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class DropdownItemComponent {
  @ViewChild(TemplateRef) itemContent!: TemplateRef<any>;
}
