import { Routes } from '@angular/router';

export const mfe2Routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    pathMatch:'full'
  },
  {
    path:'mfe2-page-1',
    loadComponent: () => import('./page-1/page-1.component').then(c => c.Page1Component)
  },
  {
    path:'mfe2-page-2',
    loadComponent: () => import('./page-2/page-2.component').then(c => c.Page2Component),
  }
];
