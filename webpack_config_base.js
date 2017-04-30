const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src' + '/index.html'
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
