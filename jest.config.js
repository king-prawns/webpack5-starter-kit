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
    }
  }
};
