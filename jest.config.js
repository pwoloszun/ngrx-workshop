// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '^@application/(.*)$': '<rootDir>/src/app/application/$1',
    '^@domain/(.*)$': '<rootDir>/src/app/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/app/infrastructure/$1',
    '^@ui/(.*)$': '<rootDir>/src/app/ui/$1',
    '^@utils/(.*)$': '<rootDir>/src/app/utils/$1',
  },
  maxWorkers: '50%'
};
