module.exports = {
  plugins: {
    stylelint             : {},
    'postcss-easy-import' : {
      extensions : '.pcss',
      plugins    : [require('stylelint')()]
    },
    'postcss-responsive-type' : {},
    'postcss-preset-env'      : {
      browsers     : '> 0.25%, not dead, not ie 11',
      stage        : 0,
      autoprefixer : {
        grid: true
      }
    },
    cssnano: {
      preset: ['advanced', { zindex: false }]
    },
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
};
