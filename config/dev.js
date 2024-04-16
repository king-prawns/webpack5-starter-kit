const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const config = require('./webpack.dev.conf');

const { log, error } = console;

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8081;
const options = {
  host     : DEFAULT_HOST,
  port     : DEFAULT_PORT,
  compress : true,
  static   : {
    directory: path.resolve(__dirname, '../src')
  }
};

const compiler = webpack(config);
const server = new WebpackDevServer(options, compiler);

log('Starting the dev web server...');
server.start(DEFAULT_PORT, DEFAULT_HOST, (err) => {
  if (err) {
    error(err);
  }
  log(`WebpackDevServer listening at localhost: ${DEFAULT_PORT}`);
  opn(`http://${DEFAULT_HOST}:${DEFAULT_PORT}`);
});
