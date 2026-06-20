module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testRegex            : '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions : [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001']
      }
    },
    'babel-jest': {
      useESM: true
    }
  },
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: false }]
  },
  transformIgnorePatterns: ['node_modules/(?!(?:@babel)/)'],
  testEnvironment: 'node',

};

