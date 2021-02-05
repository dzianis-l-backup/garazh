module.exports = {
    test: /\.js$/, // regex to find the files with respective extension
    exclude: /node_modules/, // except the modules
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
}
