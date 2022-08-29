const assert = require('chai').assert;
const letterPositions = require('../index.js').letterPositions;

// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').e, [1]);
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// assertArraysEqual(letterPositions('hello').o, [4]);

describe("#letterPositions on the happy path", () => {
  it("returns index 0 for ('hello').h", () => {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });
  it("returns index 1 for ('hello').e", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
  it("returns indexes 2, 3 for ('hello').l", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
  it("returns index 4 for ('hello').o", () => {
    assert.deepEqual(letterPositions('hello').o, [4]);
  });
});