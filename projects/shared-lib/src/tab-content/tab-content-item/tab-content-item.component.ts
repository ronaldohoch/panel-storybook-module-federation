import { Component, ContentChild, Input } from '@angular/core';
import { TabContentBodyComponent } from '../tab-content-body/tab-content-body.component';
import { TabContentLabelComponent } from '../tab-content-label/tab-content-label.component';

@Component({
  selector: 'lib-tab-content-item',
  standalone: true,
  imports: [],
  template: "<ng-content></ng-content>",
})
export class TabContentItemComponent {
  @Input() label!: string;
  @Input() isActive!: boolean;
  @ContentChild(TabContentBodyComponent) bodyComponent!: TabContentBodyComponent;
  @ContentChild(TabContentLabelComponent) labelComponent!: TabContentLabelComponent;
}
