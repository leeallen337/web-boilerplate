const webpack = require('webpack');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack_config_base');

config.bail = true;
config.profile = false;
config.output.filename = '[name].[chunkhash].js';

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        {
          loader: 'postcss-loader'
        }
      ]
    })
  }
]);

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('styles.[contenthash].css'),
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
  new webpack.optimize.UglifyJsPlugin()
]);

module.exports = config;
