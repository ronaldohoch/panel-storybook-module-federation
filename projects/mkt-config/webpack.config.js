const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mkt-config',

  exposes: {
    './routes': './projects/mkt-config/src/app/mkt-config.routes.ts',
    './Component': './projects/mkt-config/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
