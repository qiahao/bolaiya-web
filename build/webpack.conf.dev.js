const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseWebpackConfig = require('./webpack.conf.base.js');

function resolve (dir) {
    return path.join(__dirname, dir);
}

let webpackConfig = merge(baseWebpackConfig,{
	plugins: [
		// new webpack.HotModuleReplacementPlugin({})
	]
})
exports = module.exports = webpackConfig