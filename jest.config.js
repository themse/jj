const nextJest = require('next/jest');
const { compilerOptions: tsOptions } = require('./tsconfig.json');

// @ts-ignore
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  roots: ['<rootDir>'],
  modulePaths: [tsOptions.baseUrl],
  modulePathIgnorePatterns: ['<rootDir>/utils/', '<rootDir>/cypress/'],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
