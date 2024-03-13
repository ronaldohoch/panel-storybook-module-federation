import { Component, OnInit } from '@angular/core';
import {DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent, DynamicTabsComponent} from "@dinamize/ui"
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SpfCnameComponent } from '../spf-cname/spf-cname.component';
import { DkimComponent } from '../dkim/dkim.component';

@Component({
  selector: 'dinamize-nx-workspace-domains',
  standalone: true,
  imports: [
    DynamicTabBodyComponent,
    DynamicTabItemComponent,
    DynamicTabLabelComponent,
    DynamicTabsComponent,
    LandingPageComponent,
    SpfCnameComponent,
    DkimComponent
  ],
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  changeTabEvent(event:any){}

}
