module.exports = async () => {
  const postcssPresetEnv = (await import('postcss-preset-env')).default;
  const cssnano = (await import('cssnano')).default;

  return {
    plugins: [
      require('stylelint'),
      require('postcss-easy-import')({
        extensions: '.pcss',
        plugins: [require('stylelint')()]
      }),
      require('postcss-responsive-type'),
      postcssPresetEnv({
        browsers: '> 0.25%, not dead, not ie 11',
        stage: 0,
        autoprefixer: {
          grid: true
        }
      }),
      cssnano({
        preset: ['advanced', { zindex: false }]
      }),
      require('postcss-reporter')({
        clearReportedMessages: true
      })
    ]
  };
};

