import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { mfe2Routes } from './mfe2.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(mfe2Routes),
    provideAnimationsAsync()
  ]
};
