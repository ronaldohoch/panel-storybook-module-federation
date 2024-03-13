import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  TabContentComponent,
  TabContentItemComponent,
  TabContentLabelComponent,
  TabContentBodyComponent,
  TabLinkComponent } from '@dinamize/ui';
import { SendComponent } from './send/send/send.component';
import { IntegrationsComponent } from './integrations/integrations/integrations.component';
import { DomainsComponent } from './domains/domains/domains.component';
import { ContentComponent } from './content/content/content.component';
import { ConfigFormsComponent } from './config-forms/config-forms/config-forms.component';



type ConfigTab = {
  title: string,
  customClass: string,
  selected: boolean,
  link: string,
  component: any
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    TabLinkComponent,
    TabContentComponent,
    TabContentItemComponent,
    TabContentLabelComponent,
    TabContentBodyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mkt-config';

  tabs: ConfigTab[] = [
    {
      title: "Domínios",
      customClass: '',
      selected: true,
      link: "domains",
      component: DomainsComponent
    },
    {
      title: "Conteúdo",
      customClass: '',
      selected: true,
      link: "content",
      component: ContentComponent
    },
    {
      title: "Envio",
      customClass: '',
      selected: true,
      link: "send",
      component: SendComponent
    },
    {
      title: "Formulários",
      customClass: '',
      selected: true,
      link: "config-forms",
      component: ConfigFormsComponent
    },
    {
      title: "Integrações",
      customClass: '',
      selected: true,
      link: "integrations",
      component: IntegrationsComponent
    },
  ]

  selectedTab: ConfigTab = this.tabs[0];



  changeTab(tab: any){
    this.selectedTab = tab;
  }
}
