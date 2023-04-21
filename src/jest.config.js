const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage/test-angular',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest"
  // },
  transform: { '^.+.(ts|mjs|js|html)$': 'jest-preset-angular'}
};