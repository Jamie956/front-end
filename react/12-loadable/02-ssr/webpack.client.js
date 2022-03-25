var path = require("path");
var webpack = require("webpack");
// var nodeExternals = require("webpack-node-externals");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

var client = {
  entry: "./05/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name]-[chunkhash:4].js",
    publicPath: "/dist/"
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
            // plugins: ["react-loadable/babel", "syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(__dirname, "dist", "react-loadable.json")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      filename: "manifest.js",
      minChunks: Infinity
    })
  ]
};

// var serverConfig = {
//   entry: "./05/server/index.js",
//   target: "node",
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "server.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["es2015", "react", "stage-0"]
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isClient__: "false"
//     })
//   ]
// };

module.exports = client;
