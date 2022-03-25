const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}]
			}
		]
	},
};