const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/Pages/HomePage/index.js',
    Friends: './src/Pages/Friends/Friends.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    clean : true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type : 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/Pages/HomePage/index.html',
      filename: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/Friends/Friends.html',
      filename: './Friends.html',
      chunks: ['Friends'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
