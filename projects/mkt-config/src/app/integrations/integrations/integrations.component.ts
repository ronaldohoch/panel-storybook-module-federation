import { Component, OnInit } from '@angular/core';
import {DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent, DynamicTabsComponent} from "@dinamize/ui"
import { DOUBLEOPTINComponent } from '../double-opt-in/double-opt-in.component';
import { EmailAlertsComponent } from '../email-alerts/email-alerts.component';
import { IntegrationSitesComponent } from '../integration-sites/integration-sites.component';


@Component({
  selector: 'dinamize-nx-workspace-integrations',
  standalone: true,
  imports: [
    DynamicTabBodyComponent,
    DynamicTabItemComponent,
    DynamicTabLabelComponent,
    DynamicTabsComponent,
    DOUBLEOPTINComponent,
    EmailAlertsComponent,
    IntegrationSitesComponent,
  ],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
