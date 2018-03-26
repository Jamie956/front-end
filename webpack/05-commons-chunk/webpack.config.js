const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		foo: './src/foo.js',
		bar: './src/bar.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons'
		})
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};