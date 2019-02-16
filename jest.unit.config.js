const defaults  = require('./jest.config');

defaults.testRegex = "tests/unit/.*\\.(test\.ts|test\.tsx|test\.js)$";

module.exports = defaults;
