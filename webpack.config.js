
//Pasar a ES6
const webpack = require ('webpack');
const path = require ('path');
const htmlWepackPlugin = require('html-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWepackPlugin({
            template: './dist/index.html'
        }),
        new liveReloadPlugin()
    ]
}