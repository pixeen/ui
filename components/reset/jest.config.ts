import sharedConfig from '../../jest.config';

module.exports = {
  ...sharedConfig,
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  rootDir: './',
};
