const path = require('path')

/** rules */
const webpackJsRule = require('../common/webpackJsRule.js')

const serverConfig = {
    entry: {
        main: './src/server/server.js',
    },
    devtool: 'source-map',
    target: 'node',
    mode: 'development',
    output: {
        publicPath: './',
        path: path.resolve(__dirname, '../../app_server'),
        filename: 'app.server.js',
    },
    module: {
        rules: [webpackJsRule],
    },
}


module.exports = serverConfig
