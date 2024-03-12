import { Routes } from '@angular/router';

export const integrationRoutes: Routes = [
  {
    path:'',
    loadComponent: () => import('./integrations/integrations.component').then(c => c.IntegrationsComponent),
    pathMatch:'full'
  },
  {
    path:'integration-sites',
    loadComponent: () => import('./integration-sites/integration-sites.component').then(c => c.IntegrationSitesComponent),
  },
  {
    path:'email-alerts',
    loadComponent: () => import('./email-alerts/email-alerts.component').then(c => c.EmailAlertsComponent),
  },
  {
    path:'mail-send-approval',
    loadComponent: () => import('./double-opt-in/double-opt-in.component').then(c => c.DOUBLEOPTINComponent),
  }
];
