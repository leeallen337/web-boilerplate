const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const DIR_SRC = __dirname + '/src';
const DIR_DIST = __dirname + '/dist';

const webpackConfig = {
  context: DIR_SRC,
  entry: {
    main: './index.jsx',
  },
  output: {
    path: DIR_DIST,
    filename: '[name].[chunkhash].js'
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
      template: DIR_SRC + '/index.html'
    }),
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
    new ExtractTextWebpackPlugin('styles.[contenthash].css')
  ],
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = webpackConfig;
