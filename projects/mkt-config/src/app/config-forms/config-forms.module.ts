import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import { ConfigFormsComponent } from './pages/config-forms/config-forms.component';
import { ListingComponent } from './pages/listing/listing.component';
import { FormsCaptureComponent } from './pages/forms-capture/forms-capture.component';
import { CaptchaComponent } from './pages/captcha/captcha.component';
//lib
import { DynamicTabsModule } from "@dinamize/ui";
import { TooltipModule } from '@dinamize/ui';

const routes: Routes = [
  { path: '', component: ConfigFormsComponent }
];

@NgModule({
  declarations: [ConfigFormsComponent, ListingComponent, FormsCaptureComponent, CaptchaComponent],
  imports: [
    CommonModule,
    DynamicTabsModule,
    TooltipModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ConfigFormsModule { }
