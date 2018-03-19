const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.js',
		other: './src/other.js'
	},
	plugins: [
		new HTMLWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};