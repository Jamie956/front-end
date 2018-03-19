const path = require('path');

module.exports = {
	entry: {
		app: './src/app.js',
		vendors: './src/vendors.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};