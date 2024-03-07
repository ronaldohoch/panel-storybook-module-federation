import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const mfe1Routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    pathMatch:'full'
  },
  {
    path:'mfe1-page-1',
    loadComponent: () => import('./page1/page1.component').then(m => m.Page1Component)
  },
  {
    path:'mfe1-page-2',
    loadComponent: () => import('./page2/page2.component').then(m => m.Page2Component),
  }
];
