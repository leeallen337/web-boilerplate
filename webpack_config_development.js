const webpack = require('webpack');
const config = require('./webpack_config_base');

config.devServer = {
  historyApiFallback: true,
  host: '0.0.0.0'
};

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMaps: true
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  }
]);

config.devtool = 'eval-source-map';

module.exports = config;
