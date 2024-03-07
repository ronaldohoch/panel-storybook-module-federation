import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path:'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './routes'
      })
      .then(m => m.mfe1Routes)
    // loadChildren: () => import('mfe1/routes').then(m=>m.mfe1Routes)
  }
];
