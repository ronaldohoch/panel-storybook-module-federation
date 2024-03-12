import { Component } from '@angular/core';
// import { HowConfigureDomainsComponent } from '@dinamize/ui';
// import { TipComponent } from '@dinamize/ui';
// import { PageTitleComponent } from '@dinamize/ui'
// import { DynamicTabsComponent, DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent } from '@dinamize/ui';
// import { DropdownComponent, DropdownButtonComponent, DropdownItemComponent } from '@dinamize/ui';
// import { TabLinkComponent } from '@dinamize/ui';

@Component({
  selector: 'shell-empty',
  standalone: true,
  imports: [
    // HowConfigureDomainsComponent
    // TipComponent
    // PageTitleComponent
    // DynamicTabsComponent, DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent
    // DropdownComponent, DropdownButtonComponent, DropdownItemComponent
    // TabLinkComponent
  ],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
  showTip=true;
  closeTipEvent(){
    this.showTip=false;
  }
  TabsData: any[] = [
    { link: "dominios", title: "Domínios", selected: false },
    { link: "conteudo", title: "Conteúdo", selected: false },
    { link: "envio", title: "Envio", selected: false },
    { link: "formulario", title: "Formulários", selected: false },
    { link: "integracao", title: "Integração", selected: false },
  ]
}
