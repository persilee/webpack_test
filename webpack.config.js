'use strict';

const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
  entry: {
    app: ['./app.js', './test.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  devServer: {
    contentBase: __dirname + '/src',
    port: '8899',
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules!postcss-loader' //添加对样式表的处理
      //
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: {
            loader: "css-loader",
            query: {
              modules: true
            }
          }
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
