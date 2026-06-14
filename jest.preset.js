const nxPreset = require('@nx/jest/preset').default

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['html', 'clover'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/__tests__/**',
    '!*.spec.ts',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/jest.config.ts',
    '!**/jest.e2e.ts'
  ],
  moduleNameMapper: {
    '@codeshine/nestjs-query-core': process.cwd() + '/packages/core/src',
    '@codeshine/nestjs-query-graphql': process.cwd() + '/packages/query-graphql/src',
    '@codeshine/nestjs-query-typeorm': process.cwd() + '/packages/query-typeorm/src',
    '@codeshine/nestjs-query-sequelize': process.cwd() + '/packages/query-sequelize/src',
    '@codeshine/nestjs-query-typegoose': process.cwd() + '/packages/query-typegoose/src',
    '@codeshine/nestjs-query-mongoose': process.cwd() + '/packages/query-mongoose/src'
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  testTimeout: 10000
}
