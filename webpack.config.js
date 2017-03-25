const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src') + '/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  }
};

module.exports = webpackConfig;
