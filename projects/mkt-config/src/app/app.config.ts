import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { mktConfigRoutes } from './mkt-config.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(mktConfigRoutes)]
};
