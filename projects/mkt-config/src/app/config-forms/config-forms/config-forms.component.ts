import { Component, OnInit } from '@angular/core';
import {DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent, DynamicTabsComponent} from "@dinamize/ui"
import { CaptchaComponent } from '../captcha/captcha.component';
import { FormsCaptureComponent } from '../forms-capture/forms-capture.component';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'dinamize-nx-workspace-config-forms',
  standalone: true,
  imports: [
    DynamicTabBodyComponent,
    DynamicTabItemComponent,
    DynamicTabLabelComponent,
    DynamicTabsComponent,
    CaptchaComponent,
    FormsCaptureComponent,
    ListingComponent
  ],
  templateUrl: './config-forms.component.html',
  styleUrls: ['./config-forms.component.css']
})
export class ConfigFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
