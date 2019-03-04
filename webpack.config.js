const clientWebpackConfig = require('./config/client/webpack.client.js')
const serverWebpackConfig = require('./config/server/webpack.server.js')

module.exports = [clientWebpackConfig, serverWebpackConfig]
