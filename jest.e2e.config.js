// jest.config.js
module.exports = {
  displayName: 'E2E',
  preset: 'ts-jest',
  testMatch: ['**/e2e/**/*.spec.ts'],
  collectCoverageFrom: ['packages/**/*.ts', '!**/__tests__/**', '!**/dist/**', '!**/node_modules/**'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@codeshine/nestjs-query-(.*)$': '<rootDir>/packages/$1/src',
  },
  setupFilesAfterEnv: ['jest-extended'],
  snapshotSerializers: ['jest-snapshot-serializer-raw/always'],
};
