const webpack = require('webpack');
const config = require('./webpack_config_base');

config.devServer = {
  historyApiFallback: true
}

config.devtool = 'inline-source-map';

module.exports = config;
