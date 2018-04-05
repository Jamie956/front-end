const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.js',
		vendor: [
			'jquery'
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			filename: 'manifest.js'
		})
	],
};