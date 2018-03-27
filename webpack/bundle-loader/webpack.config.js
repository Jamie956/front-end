const path = require('path');

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
			{
				test: /\.bundle\.js$/,
				use: 'bundle-loader'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};