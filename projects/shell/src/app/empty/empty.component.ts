import { Component } from '@angular/core';
// import { HowConfigureDomainsComponent } from '@dinamize/ui';
// import { TipComponent } from '@dinamize/ui';
// import { PageTitleComponent } from '@dinamize/ui'
// import { DynamicTabsComponent, DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent } from '@dinamize/ui';

@Component({
  selector: 'shell-empty',
  standalone: true,
  imports: [
    // HowConfigureDomainsComponent
    // TipComponent
    // PageTitleComponent
    // DynamicTabsComponent, DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent
  ],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
  showTip=true;
  closeTipEvent(){
    this.showTip=false;
  }
}
