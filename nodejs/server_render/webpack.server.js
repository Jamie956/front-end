const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/render.js',
  target: 'node',
  // externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle.server.js',
    path: path.resolve(__dirname, 'dist')
  },
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
  }
};