const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/Pages/HomePage/index.js',
    Friends: './src/Pages/Friends/Friends.js',
    MyTickets: './src/Pages/MyTickets/MyTickets.js',
    OrderTicket: './src/Pages/OrderTicket/OrderTicket.js',
    Politic: './src/Pages/Politic/Politic.js',
    Profile: './src/Pages/Profile/Profile.js',
    ProfileInfo: './src/Pages/ProfileInfo/ProfileInfo.js',
    Registry: './src/Pages/Registry/Registry.js',
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
    new HtmlWebPackPlugin({
      template: './src/Pages/MyTickets/MyTickets.html',
      filename: './MyTickets.html',
      chunks: ['MyTickets'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/OrderTicket/OrderTicket.html',
      filename: './OrderTicket.html',
      chunks: ['OrderTicket'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/Politic/Politic.html',
      filename: './Politic.html',
      chunks: ['Politic'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/ProfileInfo/ProfileInfo.html',
      filename: './ProfileInfo.html',
      chunks: ['ProfileInfo'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/Profile/Profile.html',
      filename: './Profile.html',
      chunks: ['Profile'],
    }),
    new HtmlWebPackPlugin({
      template: './src/Pages/Registry/Registry.html',
      filename: './Registry.html',
      chunks: ['Registry'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
