const path = require('path')
const {pages} = require('./utils.js')
module.exports={
  entry: {
    ...pages
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude:/node_modules/, use:{loader: 'babel-loader'}},
      {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,use: [{loader: 'url-loader',options: {limit: 10000, name: 'assets/[name].[hash:7].[ext]'}}]},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css', '.scss'],
    alias: {
      "@": path.resolve(__dirname, '../src')
    }
  },
}