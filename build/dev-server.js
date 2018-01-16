const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server')
const opn = require('opn')
const webpackConfig = require('./webpack.conf.dev.js')
const compiler = webpack(webpackConfig);

function resolve(dir) {
    return path.join(__dirname, dir);
}



const options = {
    contentBase: './',
    hot: true,
    host: 'localhost',
    open: true,
    inline: true,
    historyApiFallback : true
        // "dev": "webpack-dev-server --content-base ./ --open --inline --hot --compress --history-api-fallback --config build/webpack.conf.dev.js"

};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
    opn('http://localhost:5000/home.html')
});