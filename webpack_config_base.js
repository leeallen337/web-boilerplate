const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname + '/src',
  entry: {
    bundle: './index.jsx',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src' + '/index.html'
    }),
    new ExtractTextWebpackPlugin('styles.[contenthash].css')
  ],
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
