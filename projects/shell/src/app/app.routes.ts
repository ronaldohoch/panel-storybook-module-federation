import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { EmptyComponent } from './empty/empty.component';

export const routes: Routes = [
  {
    path:'',
    component:EmptyComponent
  },
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
  {
    path:'mkt-config',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        // remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName:'mkt-config',
        exposedModule: './routes'
      })
      .then(m => m.mktConfigRoutes)
  },
];
