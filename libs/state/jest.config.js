module.exports = {
  name: '@rx-angular/state',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/state',
  collectCoverageFrom: [
    "./src/**/*.ts"
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
