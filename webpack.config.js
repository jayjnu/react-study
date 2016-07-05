module.exports = {
	entry: __dirname + '/src/main.js',
	
	output:{
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},
	
	devServer:{
		inline:true,
		port:7777,
		contentBase: __dirname + '/public/'
	},
	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query:{
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	}
}