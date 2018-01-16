process.env.NODE_ENV = 'production'

let webpack = require('webpack')
let rm = require('rimraf')
let ora = require('ora')
let path = require('path')
let config = require('./webpack.conf.prod.js')

let spinner = ora('building for production...').start()

rm(path.join(__dirname,'..','dist'),(err)=>{
	if (err) throw err
	webpack(config, (err,stats)=>{
		spinner.stop()
		if (err) throw err
		console.log('Build complete.\n')
	})
})
