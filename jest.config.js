module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '\\.(xml)$': '<rootDir>/src/jest/rawTransformer.js',
    }
};