const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = merge(base, {
  mode   : 'production',
  output : {
    path       : path.resolve(__dirname, '../dist'),
    publicPath : '/',
    filename   : '[chunkhash].app.js'
  },
  module: {
    rules: [{
      test : /(\.scss|\.css)$/,
      use  : ExtractTextPlugin.extract({
        use: [
          {
            loader  : 'css-loader', // translates CSS into CommonJS
            options : {
              minimize  : true,
              sourceMap : true
            }
          },
          {
            loader  : 'postcss-loader', // postprocesses CSS
            options : {
              sourceMap : true,
              ident     : 'postcss',
              plugins   : () => [
                autoprefixer()
              ]
            }
          },
          {
            // resolves relative paths based on the original source file.
            loader: 'resolve-url-loader'
          },
          {
            loader  : 'sass-loader', // compiles Sass to CSS
            options : {
              sourceMap: true
            }
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename : '[chunkhash].app.css',
      disable  : false
    }),
    new HtmlWebpackPlugin({
      filename : path.resolve(__dirname, '../dist/index.html'),
      template : 'src/index.ejs',
      favicon  : 'favicon.ico', // or use favicons-webpack-plugin
      minify   : {
        removeComments        : true,
        collapseWhitespace    : true,
        removeAttributeQuotes : true
      }
    }),
    // copy assets and manifest.json
    new CopyWebpackPlugin([
      {
        from   : path.resolve(__dirname, '../src/assets'),
        to     : 'assets',
        ignore : ['.*', 'styles/*', 'fonts/*']
      },
      {
        from : path.resolve(__dirname, '../src/manifest.json'),
        to   : ''
      }
    ]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new OfflinePlugin({
      ServiceWorker: {
        minify: false
      }
    })
  ]
});
