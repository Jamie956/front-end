const path = require('path');

module.exports = {
	//======================== 1
	entry: {
		app: './src/app',
		vendors: './src/vendors'
	},
	//======================== 2
	// entry:['./src/app','./src/vendors'],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};