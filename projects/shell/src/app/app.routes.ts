import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path:'mfe1', //mother phocker experience
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        // remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName:'mfe1',
        exposedModule: './routes'
      })
      .then(m => m.mfe1Routes)
  },
  {
    path:'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        // remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName:'mfe2',
        exposedModule: './routes'
      })
      .then(m => m.mfe2Routes)
  },
];
