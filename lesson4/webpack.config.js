var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/main"
  },
  output: {
    path: path.join(__dirname, "buildOutput"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "node_modules/MyShape")
      ],
      exclude: [
        path.resolve(__dirname, "node_modules/MyShape/index.js")
      ],
      loader: 'babel'
      // query: {
      //   presets: ['es2015']
      // }
    }, {
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'style!css'//必须先经过css-loader处理，然后经过style-loader处理
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack',
      filename: '../index.html'
    })
  ]
};