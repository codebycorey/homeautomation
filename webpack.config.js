const path = require('path');

const webpack = require('webpack');
const awesomeTypescriptLoader = require('awesome-typescript-loader');
const scriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js',
    },
    entry: {
        'polyfills': './aeonian/UI/polyfills.ts',
        'main': './aeonian/UI/main.ts'
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            use: 'raw-loader',
            exclude: [path.resolve(__dirname, 'Aeonian', 'UI', 'index.html')]
        }, {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['to-string-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new awesomeTypescriptLoader.CheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),
        new scriptExtHtmlWebpackPlugin({
            sync: /polyfill|vendor/,
            defaultAttribute: 'async',
            preload: [/polyfill|vendor|main/],
            prefetch: [/chunk/]
        }),
        new htmlWebpackPlugin({
            template: 'aeonian/UI/index.html',
            chuncksSortMode: 'dependency',
            inject: 'body'
        })
    ]
}
