import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicTabsModule } from "@dinamize/ui";
import { TooltipModule } from '@dinamize/ui';
import { DinaTipModule } from '@dinamize/ui';

import { ContentComponent } from './pages/content/content.component';
import { DefaultLinkComponent } from './pages/default-link/default-link.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { DefaultTextsComponent } from './pages/default-texts/default-texts.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';


const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  declarations: [ContentComponent, DefaultLinkComponent, SocialMediaComponent, DefaultTextsComponent, PersonalDataComponent],
  imports: [
    CommonModule,
    DynamicTabsModule,
    TooltipModule,
    DinaTipModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ContentModule { }
