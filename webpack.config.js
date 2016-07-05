var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer: {
		inline: true,
		historyApiFallback:true,
		colors: true,
		port: 7777,
		contentBase: __dirname + '/public/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	}
};