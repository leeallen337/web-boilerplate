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
    filename: 'bundle.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ],
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  }
};

module.exports = webpackConfig;
