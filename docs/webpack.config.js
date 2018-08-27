let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry:"./app/scripts/script.js",
  output:{
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "script.js"
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use:{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
          }
      ]
  },
    mode:"development"
}
