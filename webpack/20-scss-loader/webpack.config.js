const path = require('path');

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [{
			test: /\.scss/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};