const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [{
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};