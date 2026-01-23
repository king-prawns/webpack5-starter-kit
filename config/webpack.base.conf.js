const StyleLintPlugin = require('stylelint-webpack-plugin');

process.noDeprecation = true;

module.exports = {
  module: {
    rules: [{
      test    : /\.html$/,
      loader  : 'html-loader',
      options : { minimize: true }
    },
    {
      test    : /\.js?$/,
      exclude : [/node_modules/],
      loader  : 'babel-loader'
    },
    {
      test    : /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
      loader  : 'url-loader',
      options : {
        limit: 10000
      }
    }]
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    // StyleLintPlugin disabled due to stylelint ES Module incompatibility
    // Re-enable after upgrading stylelint-webpack-plugin to support ES modules
    // new StyleLintPlugin({
    //   files: '**/*.pcss'
    // })
  ]
};
