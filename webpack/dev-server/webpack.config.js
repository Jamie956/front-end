const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	watchOptions: {
		poll: 1000
	},
	devServer: {
		contentBase: './dist',
		port: 3000
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};