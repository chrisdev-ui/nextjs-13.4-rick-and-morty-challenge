const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
}
module.exports = createJestConfig(customJestConfig)
