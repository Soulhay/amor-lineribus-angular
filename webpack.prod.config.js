const base = require('./webpack.config');

/**
 * Production federation config for the Angular remote.
 * Same as webpack.config.js except for publicPath: in production the remote's
 * own lazy chunks must resolve against GitHub Pages, not the local dev server.
 */
module.exports = {
  ...base,
  output: {
    ...base.output,
    publicPath: 'https://soulhay.github.io/amor-lineribus-angular/',
  },
};