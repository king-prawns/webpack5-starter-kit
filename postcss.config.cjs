module.exports = async () => {
  const postcssPresetEnv = (await import('postcss-preset-env')).default;
  const cssnano = (await import('cssnano')).default;
  const postcssResponsiveType = (await import('postcss-responsive-type')).default;
  const postcssReporter = (await import('postcss-reporter')).default;

  return {
    plugins: [
      postcssResponsiveType,
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
      postcssReporter({
        clearReportedMessages: true
      })
    ]
  };
};

