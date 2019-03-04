const path = require('path');
const htmlWebpackPlugin = require('./plugins/webpackHtmlPlugin.js');
const webpackProvidePlugin = require('./plugins/webpackProvidePlugin.js');


/** rules */
const webpackJsRule = require('../clientServer/webpackJsRule.js');
const webpackScssRule = require('./rules/webpackScssRule.js');

const clientConfig = {
  target: 'web',
  entry: {
    main: './src/client/index.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'main.client.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      webpackJsRule,
      webpackScssRule,
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    webpackProvidePlugin,
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
    port: 3030,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

module.exports = clientConfig;
