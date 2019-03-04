const path = require('path');

const serverConfig = {
  entry: {
    main: './src/server/index.js',
  },
  target: 'node',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'main.node.js',
  },
};

module.exports = serverConfig;
