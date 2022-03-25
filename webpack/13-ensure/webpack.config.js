const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[chunkhash:5].bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath:"./",
		chunkFilename:'[name]-[id].[chunkhash:5].buncle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
};