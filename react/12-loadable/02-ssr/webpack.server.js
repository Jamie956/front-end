var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var server = {
  entry: "./05/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-0"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "false"
    })
  ]
};

module.exports = server;
