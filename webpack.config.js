// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  module: {
    rules: [

      {
        test: /\.js$/, // regex to find the files with respective extension
        exclude: /node_modules/, // except the modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },

      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Sandbox',
      myPageHeader: 'Sandbox',
      template: './src/index.html',
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    // }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      Redux: 'redux',
      ReduxReact: 'redux-react',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'), // serve your static files from here
    watchContentBase: true, // initiate a page refresh if static content changes
    // proxy: [ // allows redirect of requests to webpack-dev-server to another destination
    //   {
    //     context: ['/api', '/auth'], // can have multiple
    //     target: 'http://localhost:8080', // server and port to redirect to
    //     secure: false,
    //   },
    // ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: true, // defaults to false
      errors: true, // defaults to false
    },
  },
};
