import { Routes } from '@angular/router';

export const mfe1Routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    pathMatch:'full'
  },
  {
    path:'mfe1-page-1',
    loadComponent: () => import('./page1/page1.component').then(c => c.Page1Component)
  },
  {
    path:'mfe1-page-2',
    loadComponent: () => import('./page2/page2.component').then(c => c.Page2Component),
  }
];
