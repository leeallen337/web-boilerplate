const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src') + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};

module.exports = webpackConfig;
