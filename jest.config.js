/** @format */

const { defaults } = require('jest-config');
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'd.ts'],
    modulePathIgnorePatterns: ['./dist', './docs', './__mocks__'],
};
