const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.conf.base.js')





let webpackConfig = merge(baseWebpackConfig,{
	module: {
		rules: [
			{
			    test: /\.scss$/,
			    // loader: 'style-loader!css-loader!sass-loader',
			    // use: ['css-loader','sass-loader']
			    use: ExtractTextPlugin.extract({
			        fallback: 'style-loader',
			        use: ['css-loader','sass-loader']
			    })
			},
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity,
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
		})
	]
})

exports = module.exports = webpackConfig