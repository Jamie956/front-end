const path = require('path');

module.exports = {
  entry: './src/client/index.js',
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.client.js',
    path: path.resolve(__dirname, 'dist')
  }  
};