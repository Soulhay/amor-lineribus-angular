const { shareAll } = require('@angular-architects/module-federation/webpack');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: 'amorLineribusAngular',
    publicPath: 'http://localhost:4201/',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'amorLineribusAngular',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'amorLineribusAngular' },
      exposes: {
        './Mount': './src/app/mount.ts',
      },
      shared: shareAll({
        singleton: true,
        strictVersion: false,
        requiredVersion: 'auto',
      }),
    }),
  ],
};