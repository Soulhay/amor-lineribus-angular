const { shareAll } = require('@angular-architects/module-federation/webpack');
const { ModuleFederationPlugin } = require('webpack').container;

/**
 * Production federation config for the Angular remote.
 *
 * Identical to webpack.config.js except for publicPath, which must point at
 * the GitHub Pages location so the remote's own lazy chunks resolve when the
 * shell loads it from a different path.
 */
module.exports = {
  output: {
    uniqueName: 'amorLineribusAngular',
    publicPath: 'https://soulhay.github.io/amor-lineribus-angular/',
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