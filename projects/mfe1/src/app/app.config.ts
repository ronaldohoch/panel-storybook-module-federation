import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { mfe1Routes } from './mfe1.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(mfe1Routes),
    provideAnimationsAsync(),
  ]
};
