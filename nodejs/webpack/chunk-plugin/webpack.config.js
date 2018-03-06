const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.js',
		other: './src/other.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Code Splitting'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // Specify the common bundle's name.
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	}
};