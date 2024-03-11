import { Component } from '@angular/core';
// import { HowConfigureDomainsComponent } from '@dinamize/ui';
// import { TipComponent } from '@dinamize/ui';
// import { PageTitleComponent } from '@dinamize/ui'

@Component({
  selector: 'shell-empty',
  standalone: true,
  imports: [
    // HowConfigureDomainsComponent
    // TipComponent
    // PageTitleComponent
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
