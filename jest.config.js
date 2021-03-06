module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/test/**/*Test.ts?(x)',
        '**/test/**/*Integration*.ts?(x)'
    ],
    coverageDirectory: 'logs/jest',
    collectCoverage: true,
    testResultsProcessor: 'jest-sonar-reporter'
}
