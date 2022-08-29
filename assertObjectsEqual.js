const eqArrays = require('./eqArrays.js');

const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`😀😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🤢🤢🤢Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1});

module.exports = assertObjectsEqual;