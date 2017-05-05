const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const contextPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

const config = {
  context: contextPath,
  entry: {
    bundle: './index.jsx',
  },
  output: {
    path: outputPath,
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: contextPath + '/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
