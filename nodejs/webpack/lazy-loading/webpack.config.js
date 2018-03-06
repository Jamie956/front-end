const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: "./src/main.js",
		print: "./src/print.js"
	},
	plugins: [
    new HtmlWebpackPlugin({})
  ],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	}
};