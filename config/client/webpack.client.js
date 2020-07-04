const path = require('path');

/** plugins */
const htmlWebpackPlugin = require('./plugins/webpackHtmlPlugin.js');
const webpackProvidePlugin = require('./plugins/webpackProvidePlugin.js');

const webpackScssRule = require('./rules/webpackScssRule.js');
const webpackJsRule = require('../common/webpackJsRule.js');

/** constants */
const webpackClientConstants = require('./constants/webpackClientConstants.js');

const relativeDestPath = `../../${webpackClientConstants.destinationDirName}`;

const clientConfig = {
    target: 'web',
    entry: {
        main: webpackClientConstants.entryRelativePath,
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, relativeDestPath),
        filename: 'app.client.js',
    },
    devtool: 'source-map',
    module: {
        rules: [webpackJsRule, webpackScssRule],
    },
    plugins: [htmlWebpackPlugin, webpackProvidePlugin],
    devServer: {
        contentBase: path.join(__dirname, relativeDestPath),
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 2000,
            ignored: /node_modules/,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        },
        publicPath: '/bundled/',
        port: 3030,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    resolve: {
        alias: {
            hooks: path.resolve(__dirname, '../../src/client/core/hooks.js'),
            components: path.resolve(
                __dirname,
                '../../src/client/components/components.js',
            ),
            Redux: 'redux',
            ReactRedux: 'react-redux',
        },
    },
};

module.exports = clientConfig;
