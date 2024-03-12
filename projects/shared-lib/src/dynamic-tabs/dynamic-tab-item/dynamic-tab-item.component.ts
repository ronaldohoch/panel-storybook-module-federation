import { Component, ContentChild, Input } from '@angular/core';
import { DynamicTabLabelComponent } from '../dynamic-tab-label/dynamic-tab-label.component';
import { DynamicTabBodyComponent } from '../dynamic-tab-body/dynamic-tab-body.component';
@Component({
  selector: 'lib-dynamic-tab-item',
  standalone: true,
  imports: [],
  template: "<ng-content></ng-content>"
})
export class DynamicTabItemComponent {
  @Input() label!: string;
  @Input() isActive!: boolean;
  @ContentChild(DynamicTabBodyComponent) bodyComponent!: DynamicTabBodyComponent;
  @ContentChild(DynamicTabLabelComponent) labelComponent!: DynamicTabLabelComponent;
}
