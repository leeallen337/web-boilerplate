const webpack = require('webpack');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const config = require('./webpack_config_base');

config.bail = true;
config.profile = false;
config.output.filename = '[name].[chunkhash].js';

config.plugins = config.plugins.concat([
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest'
  }),
]);

module.exports = config;
