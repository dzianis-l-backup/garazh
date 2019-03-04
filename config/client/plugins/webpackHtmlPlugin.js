const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  hash: true,
  title: 'Sandbox',
  myPageHeader: 'Sandbox',
  template: './src/client/index.html',
  filename: 'index.html',
});
