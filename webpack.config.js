import webpack from 'webpack';

export default {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: `${__dirname}/dist`
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
                use: ['style-loader', 'css']
            }
        ]
    },
    resolve: {
        modules: [`${__dirname}/node_modules`]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist'
    }
}