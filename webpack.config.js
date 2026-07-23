const { shareAll } = require('@angular-architects/module-federation/webpack');
const { ModuleFederationPlugin } = require('webpack').container;

/**
 * Development federation config for the Angular remote.
 *
 * Identical to webpack.prod.config.js except for publicPath, which points
 * at the local dev server so the remote's own lazy chunks resolve when the
 * shell loads it from localhost:3000.
 */
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