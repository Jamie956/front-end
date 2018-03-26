const path = require('path');

var serverConfig = {
	entry: './src/server.js',	
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js'
	}
};

var clientConfig = {
	entry: './src/client.js',	
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'client.js'
	}
};

module.exports = [serverConfig, clientConfig];