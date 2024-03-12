import { Routes, provideRouter } from '@angular/router';
import { sendRoutes } from './send/send.routes';

export const mktConfigRoutes: Routes = [
  {
    path:'',
    loadComponent: () => import('./app.component').then(c => c.AppComponent),
    pathMatch:'full'
  },
  {
    path:'send',
    loadChildren: () => import('./send/send.routes').then(c => c.sendRoutes),
  },
  {
    path:'integrations',
    loadChildren: () => import('./integrations/integrations.routes').then(c=> c.integrationRoutes)
  }
];
