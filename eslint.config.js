const babelParser = require('@babel/eslint-parser');
let flowtypePlugin = require('eslint-plugin-flowtype');
let importPlugin = require('eslint-plugin-import');

module.exports = {
  languageOptions: {
    parser  : babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: [
          '@babel/preset-flow'
        ]
      }
    },
    globals : {
      PRODUCTION: true
    }
  },
  ignores : ['src/assets/*'],
  plugins : {
    flowtype: flowtypePlugin,
    import  : importPlugin
  },
  rules: {
    'no-console'                        : 0,
    'global-require'                    : 0,
    'no-use-before-define'              : 0,
    'no-underscore-dangle'              : 0,
    'class-methods-use-this'            : 0,
    'import/prefer-default-export'      : 0,
    'comma-dangle'                      : [2, 'never'],
    'import/no-extraneous-dependencies' : [2, { devDependencies: true }],
    'key-spacing'                       : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon'
      }
    }],
    'max-depth'            : ['error', 2],
    'max-nested-callbacks' : ['error', 2],
    'max-statements'       : ['error', 15],
    'max-len'              : ['error', 150]
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
