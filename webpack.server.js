const Path = require("path");
const nodeExternals = require('webpack-node-externals');
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const serverConfig = {
  target: "node",
  mode: 'development',
  entry: "./src/server//index.js",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()],
}
module.exports = merge(config,serverConfig);
