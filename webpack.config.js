const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Todo Title',
      myPageHeader: 'Todo App Header',
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
