const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

var client = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
      __isClient__: "true"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }
};

var server = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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

module.exports = [client, server];
