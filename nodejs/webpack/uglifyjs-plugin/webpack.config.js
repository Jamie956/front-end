const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};