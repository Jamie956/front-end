const path = require('path');

module.exports = {
  entry: './main_browser.js',
  output: {
    filename: 'bundle_browser.js',
    path: path.resolve(__dirname, './dist'),
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