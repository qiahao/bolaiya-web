const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    entry: {
        home: './src/js/home.js',
        'contact-us': './src/js/contact-us.js',
        'product': './src/js/product.js',
        'vendor': ['jquery','./src/js/modules/head.js'],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!sass-loader',
                use: ['style-loader','css-loader','sass-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader','sass-loader']
                // })
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: 'src/html/home.html',
            inject: true,
            chunks: ['home','vendor'],
        }),
        new HtmlWebpackPlugin({
            filename: 'contact-us.html',
            template: 'src/html/contact-us.html',
            inject: true,
            chunks: ['vendor','contact-us'],

        }),
    ]
}