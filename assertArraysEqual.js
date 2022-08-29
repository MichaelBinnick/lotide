const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🤢🤢🤢Assertion Failed: ${arrayOne} === ${arrayTwo}`);
};

module.exports = assertArraysEqual;