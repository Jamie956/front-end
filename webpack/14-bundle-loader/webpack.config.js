const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		// chunkFilename: '[name].[id].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /src\\pages(\\.*).(js)/,
				use: {
					loader: 'bundle-loader',
					options: {
						lazy: true,
						name: '[name].[id].js',
					}
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
};