const path = require('path');

module.exports = {
	entry: {
		app: './src/app',
		vendors: './src/vendors'
	},
	output: {
		filename: '[name]-[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
};