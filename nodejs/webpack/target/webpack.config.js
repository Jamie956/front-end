const path = require('path');

var serverConfig = {
	entry: './src/main.js',	
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.node.js'
	}
};

var clientConfig = {
	entry: './src/main.js',	
	target: 'web', // <=== can be omitted as default is 'web'
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	}
};

module.exports = [serverConfig, clientConfig];