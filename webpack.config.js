var resolve = require('path').resolve;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve('client'),
  entry: {
    app: './app/app.module'
  },
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};