const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ],
};