const path = require('path');
const webpack = require('webpack');
const fs = require('fs-extra');
const config = require('./webpack.prod.conf');

console.log('Building...');
fs.remove(path.resolve(__dirname, '../dist'), (err) => {
  if (err) {
    console.error('error - fs.remove');
    throw err;
  }
  webpack(config, (werr, stats) => {
    console.log('\n');

    if (werr || stats.hasErrors()) {
      console.log(stats.toString({
        hash        : false,
        timings     : false,
        modules     : false,
        chunks      : false,
        colors      : true,
        assets      : false,
        children    : false,
        entrypoints : false
      }));

      console.log('\n');
      console.error('Build error. 😭');
      return;
    }

    process.stdout.write(`${stats.toString({
      colors       : true,
      modules      : false,
      children     : false,
      chunks       : false,
      chunkModules : false
    })}\n\n`);

    console.log('Build complete. 🎉\n');
    console.log(' Tip: built files are meant to be served over an HTTP server.\n'
      + ' Opening index.html over file:// won\'t work.\n');
  });
});
