const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('html-loader');

module.exports = {
  entry: {
    index: '/src/Pages/main.js',
    friends: '/src/Pages/Friends.js',
    myTickets: '/src/Pages/MyTickets.js',
    orderTicket: '/src/Pages/OrderTicket.js',
    politic: '/src/Pages/Politic.js',
    profile: '/src/Pages/Profile.js',
    profileInfo: '/src/Pages/ProfileInfo.js',
    registry: '/src/Pages/Registry.js',
  },

  output: {
    clean: true, // Очищаем каталог dist
    filename: './scripts/[name].js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    asyncChunks: true,
    publicPath: './',
    assetModuleFilename: './assets/[name][ext]',
    
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.js$/, // Регулярное выражение для обработки файлов с расширением .js,
        use: 'babel-loader',
        exclude: /node_modules/, // Исключаем папку с node_modules
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource"
      }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
        filename: "Friends.html",
        template: "src/Friends.html",
        chunks: ["friends"]
    }),
    new HtmlWebpackPlugin({
        filename: "MyTickets.html",
        template: "src/MyTickets.html",
        chunks: ["myTickets"]
    }),
    new HtmlWebpackPlugin({
        filename: "orderTicket.html",
        template: "src/orderTicket.html",
        chunks: ["orderTicket"]
    }),
    new HtmlWebpackPlugin({
        filename: "Politic.html",
        template: "src/Politic.html",
        chunks: ["politic"]
    }),
    new HtmlWebpackPlugin({
        filename: "Profile.html",
        template: "src/Profile.html",
        chunks: ["profile"]
    }),
    new HtmlWebpackPlugin({
        filename: "ProfileInfo.html",
        template: "src/ProfileInfo.html",
        chunks: ["profileInfo"]
    }),
    new HtmlWebpackPlugin({
        filename: "Registry.html",
        template: "src/Registry.html",
        chunks: ["registry"]
    }),
  ],

  

  devServer: {
    static: {
      directory: path.join(__dirname), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development',
};