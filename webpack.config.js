const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src') + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};

module.exports = webpackConfig;
