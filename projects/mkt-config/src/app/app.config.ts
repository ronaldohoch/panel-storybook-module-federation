import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { mktConfigRoutes } from './mkt-config.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(mktConfigRoutes, withPreloading(PreloadAllModules))]
};
