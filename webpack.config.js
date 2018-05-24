/*
* WEBPACK 4+ Configuration
*/

'use strict';

const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

//Make available the Bundle Analyzer Plugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    watch: true,

    entry: {
        app: './src/index.js',
        vendor: ['./node_modules/phaser/dist/phaser.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor', /*The JavaScript File Name*/
                    chunks: 'all'
                }
            }
/*
            cacheGroups: {
                default: {
                    name: 'default',
                    minChunks: 1,
                    priority: 1,
                    reuseExistingChunk: true,
                },
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                }
            }*/
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, '/node_modules/'),
                options: {presets: ['es2015']}
            },
            { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,            
            reportFilename: '_bundle-analyzer-report.html'
        }),
        new webpack.DefinePlugin({
            WEBGL_RENDERER: true, // Needed to get Phaser to work with Webpack. Creates this as a global constant.
            CANVAS_RENDERER: true // Needed to get Phaser to work with Webpack. Creates this as a global constant.
        }),
        new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 8000,
            server: {
                baseDir: ['./']
            }
        })
    ]
};

