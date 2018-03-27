const path = require('path');

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [{
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};