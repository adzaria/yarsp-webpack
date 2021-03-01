const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
if (!process.env.NODE_ENV) require('dotenv').config();

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "public", "index.html"),
      favicon: path.resolve(__dirname, "src", "public", "favicon.ico"),
    }),
    new webpack.EnvironmentPlugin({...process.env})
  ],
  module: {
    rules: [{
      test: /\.?css$/,
      exclude: /node_modules/,
      include: /src/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.ts?/,
      exclude: /node_modules/,
      include: /src/,
      use: ["ts-loader"]
    }, {
      test: /\.js?/,
      exclude: /node_modules/,
      include: /src/,
      use: ["babel-loader"]
    }]
  },
  optimization: {
    splitChunks: {chunks: "all"}
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
}