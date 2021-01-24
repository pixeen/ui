import sharedConfig from '../../jest.config';

module.exports = {
  ...sharedConfig,
  updateSnapshot: true,
  collectCoverage: true,
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/src/*.tsx'],
  testMatch: ['**/?(*.)+(spec|test).tsx'],
  coverageDirectory: '<rootDir>/tests/coverage',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
};
