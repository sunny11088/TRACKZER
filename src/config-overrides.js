// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ];
  return config;
};
