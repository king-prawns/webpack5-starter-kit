# webpack5-starter-kit

Webpack 5 with webpack-dev-server configuration (and Web Components).

## Dependencies

- Node v12.16.0 (or later)
- Yarn v1.22 (or later) | NPM v6.13.4 (or later)

## Installation via CLI

  * Install w5kit-cli

```
npm install -g w5kit-cli
```

  * Launch the CLI

```
w5kit
```

  * Choose `Vanilla JS`

## Installation via Clone

* Clone this repository

```
git clone https://github.com/king-prawns/webpack-starter-kit.git [your-app-name]
```

Remove the .git folder and change details within:

```
package.json
src/manifest.json
```

* Install dependencies

```
$ cd your-app-name
$ yarn
```

## Available tasks

```sh

# Runs development server (Webpack dev server)
$ yarn dev

# Build command
$ yarn build

# Lint with ESLint
$ yarn lint

# Run Flow
$ yarn flow

# Run unit tests (ava + instanbul)
$ yarn test

# Runs http-server on port 8082
$ yarn httpserver

```

## Features

* [Webpack 5](https://github.com/webpack/webpack)
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
* [Babel](https://babeljs.io/)
* [Flow](https://flow.org/)
* [EsLint](https://eslint.org/docs/user-guide/getting-started)
* [StyleLint](https://github.com/stylelint/stylelint)
* [Postcss](https://github.com/postcss/postcss)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Ava](https://github.com/avajs/ava)
* [nyc](https://github.com/istanbuljs/nyc)
* [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* Webpack Plugins: Html, Copy, MiniCssExtract, Define

## TypeScript

### Please go to [TS repo](https://github.com/king-prawns/webpack5-starter-kit-ts)
