const path = require('path');

module.exports = {
	entry: {
		app: ['./src/foo','./src/bar']
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	}
};