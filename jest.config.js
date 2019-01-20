module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/test/**/*Test.ts?(x)',
        '**/test/**/*Integration*.ts?(x)'
    ],
    coverageDirectory: 'logs/jest',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts?(x)'
    ],
    reporters: [
        'default',
        'jest-junit'
    ]
}
