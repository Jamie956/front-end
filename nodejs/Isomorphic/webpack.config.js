const path = require('path');

module.exports = {
  entry: './src/client/main.js',
  output: {
    filename: 'bundle_client.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'source-map'
};