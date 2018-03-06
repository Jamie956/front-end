const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
	}
};