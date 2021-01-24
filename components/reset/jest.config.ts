import sharedConfig from '../../jest.config';

module.exports = {
  ...sharedConfig,
  updateSnapshot: true,
  collectCoverage: true,
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/src/*.tsx'],
  testMatch: ['**/?(*.)+(spec|test).tsx'],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
};
