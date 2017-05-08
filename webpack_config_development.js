const webpack = require('webpack');
const config = require('./webpack_config_base');

config.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './index.jsx'
];

config.devServer = {
  historyApiFallback: true,
  host: '0.0.0.0'
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
config.plugins.unshift(new webpack.NamedModulesPlugin());

config.devtool = 'inline-source-map';

module.exports = config;
