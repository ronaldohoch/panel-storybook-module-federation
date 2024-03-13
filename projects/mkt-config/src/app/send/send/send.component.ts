import { Component, OnInit } from '@angular/core';
import {DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent, DynamicTabsComponent} from "@dinamize/ui"
import { ListTestComponent } from '../list-test/list-test.component';
import { OptionsOptOutComponent } from '../options-opt-out/options-opt-out.component';
import { MailSendingApprovalComponent } from '../mail-sending-approval/mail-sending-approval.component';
import { DefaultEmailComponent } from '../default-email/default-email.component';
import { SocialMediasComponent } from '../social-medias/social-medias.component';


@Component({
  selector: 'dinamize-nx-workspace-send',
  standalone: true,
  imports: [
    DynamicTabBodyComponent,
    DynamicTabItemComponent,
    DynamicTabLabelComponent,
    DynamicTabsComponent,
    ListTestComponent,
    OptionsOptOutComponent,
    MailSendingApprovalComponent,
    DefaultEmailComponent,
    SocialMediasComponent
  ],
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
