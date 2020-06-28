module.exports = {
  collectCoverageFrom: [
    '**/src/**.{js,jsx}',
    '!**/node_modules/**',
    '!**/package.json',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['./setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(tests.*(\\.|/)(spec))\\.(j|t)sx?$',
};