const path = require('path');

var serverConfig = {
	entry: './src/server.js',	
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'server.js'
	}
};

var clientConfig = {
	entry: './src/client.js',	
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'client.js'
	}
};

module.exports = [serverConfig, clientConfig];