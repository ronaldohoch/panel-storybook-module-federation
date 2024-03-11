const { share, shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const defaultObjectShare = {
  singleton: true,
  strictVersion: true,
  requiredVersion: 'auto'
}

module.exports = withModuleFederationPlugin({
  name: 'mfe2',
  exposes: {
    './routes': './projects/mfe2/src/app/mfe2.routes.ts',
    './Component': './projects/mfe2/src/app/app.component.ts',
  },
  shared: {...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })},
  // shared: share({
  //   '@angular/core':defaultObjectShare,
  //   '@angular/common':defaultObjectShare,
  //   '@angular/common/http':defaultObjectShare,
  //   '@angular/router':defaultObjectShare,
  //   '@angular/material/button':defaultObjectShare,
  //   '@angular/material/card':defaultObjectShare,
  //   '@angular/material/toolbar':defaultObjectShare,
  //   '@angular/material/icon':defaultObjectShare,
  // }),
  sharedMappings: ['shared-lib']

});
