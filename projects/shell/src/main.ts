// import { loadRemoteEntry } from '@angular-architects/module-federation';
import { loadManifest } from '@angular-architects/module-federation';
import { enableProdMode, isDevMode } from '@angular/core';

let manifestUrl = 'assets/dev.mf.manifest.json'

// if(isDevMode()) {
  // console.log('is dev mode')
//   manifestUrl = 'assets/prod.mf.manifest.json';
//   enableProdMode();
// }

loadManifest(manifestUrl)
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));


  /**
 * Old
 */
// import('./bootstrap')
// .catch(err => console.error(err));
