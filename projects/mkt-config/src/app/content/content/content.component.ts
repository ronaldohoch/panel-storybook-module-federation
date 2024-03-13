import { Component, OnInit } from '@angular/core';
import {DynamicTabBodyComponent, DynamicTabItemComponent, DynamicTabLabelComponent, DynamicTabsComponent} from "@dinamize/ui"
import { DefaultLinkComponent } from '../default-link/default-link.component';
import { DefaultTextsComponent } from '../default-texts/default-texts.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'dinamize-nx-workspace-content',
  standalone: true,
  imports: [
    DynamicTabBodyComponent,
    DynamicTabItemComponent,
    DynamicTabLabelComponent,
    DynamicTabsComponent,
    DefaultLinkComponent,
    DefaultTextsComponent,
    PersonalDataComponent,
    SocialMediaComponent
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTabEvent(event:any){}
}
