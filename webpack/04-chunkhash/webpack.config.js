const path = require('path');

module.exports = {
	entry: {
		foo: './src/foo',
		bar: './src/bar'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'build')
	}
};