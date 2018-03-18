const path = require('path');

module.exports = {
  entry: './src/server/render.js',
  target: 'node',
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react']
          }
        },
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css/,
        use: ['ignore-loader']
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle.server.js',
    path: path.resolve(__dirname, 'dist')
  }  
};