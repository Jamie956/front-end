const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		foo: './src/foo.js',
		bar: './src/bar.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons'
		})
	],
};