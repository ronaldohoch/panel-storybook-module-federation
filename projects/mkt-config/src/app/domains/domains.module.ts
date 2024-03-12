import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicTabsModule } from "@dinamize/ui";
import { TooltipModule } from '@dinamize/ui';
import { HowConfigureDomainsModule } from '@dinamize/ui';

import { DomainsComponent } from './pages/domains/domains.component';
import { SpfCnameComponent } from './pages/spf-cname/spf-cname.component';
import { DkimComponent } from './pages/dkim/dkim.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: DomainsComponent }
];

@NgModule({
  declarations: [DomainsComponent, SpfCnameComponent, DkimComponent, LandingPageComponent],
  imports: [
    CommonModule,
    DynamicTabsModule,
    TooltipModule,
    HowConfigureDomainsModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DomainsModule { }
