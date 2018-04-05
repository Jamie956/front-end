const path = require('path');

module.exports = {
	entry: {
		foo: './src/foo',
		bar: './src/bar'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'build')
	}
};