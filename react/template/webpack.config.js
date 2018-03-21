var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./main.js",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      filename: 'index.html'
    })
  ],
  output: {
    path: "dist",
    filename: "main.js"
  }
};