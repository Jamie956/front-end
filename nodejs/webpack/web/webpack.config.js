const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize']
      })
    }]
  },
  plugins: [
    new WebPlugin({
      template: './src/template.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: `[name].css`
    })
  ]
};