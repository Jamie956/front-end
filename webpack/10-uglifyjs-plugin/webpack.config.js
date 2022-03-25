const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		})
	],
	devtool: 'source-map',
};