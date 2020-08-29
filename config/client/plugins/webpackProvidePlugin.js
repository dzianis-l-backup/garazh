const webpack = require('webpack')

module.exports = new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    Redux: 'redux',
    ReactRedux: 'react-redux',
    PropTypes: 'prop-types',
})
