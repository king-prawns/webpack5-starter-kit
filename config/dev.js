const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const chalk = require('chalk');
const config = require('./webpack.dev.conf');

const { log } = console;

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8081;
const options = {
  host           : DEFAULT_HOST,
  port           : DEFAULT_PORT,
  contentBase    : 'src',
  stats          : 'minimal',
  clientLogLevel : 'none',
  watchOptions   : { poll: true },
  hot            : true,
  compress       : true,
  inline         : true,
  overlay        : true
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

log(chalk.cyan('Starting the dev web server...'));
server.listen(DEFAULT_PORT, DEFAULT_HOST, (err) => {
  if (err) {
    log(chalk.red(err));
  }
  log(`${chalk.green('WebpackDevServer listening at localhost:')} ${chalk.underline.green(DEFAULT_PORT)}`);
  opn(`http://${DEFAULT_HOST}:${DEFAULT_PORT}`);
});
