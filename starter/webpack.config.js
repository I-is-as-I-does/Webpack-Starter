const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const license = 'This file is part of *** | (c) 2021 I-is-as-I-does | MIT license';

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename:"css/main.css"}),
    new webpack.BannerPlugin({
      banner: license,
    })
],
};