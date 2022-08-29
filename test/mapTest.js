const assert = require('chai').assert;
const map = require('../index.js').map;

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word[0] + word[1]), ['gr', 'co', 'to', 'ma', 'to']);
// assertArraysEqual(map(numbers, number => number + 1), [2, 3, 4, 5, 6]);

const numbers = [1, 2, 3, 4, 5];
const words = ["ground", "control", "to", "major", "tom"];

describe("#map on the happy path", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for (words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns ['gr', 'co', 'to', 'ma', 'to'] for (words, word => word[0] + word[1])", () => {
    assert.deepEqual(map(words, word => word[0] + word[1]), ['gr', 'co', 'to', 'ma', 'to']);
  });
  it("returns [2, 3, 4, 5, 6] for (numbers, number => number + 1)", () => {
    assert.deepEqual(map(numbers, number => number + 1), [2, 3, 4, 5, 6]);
  });
});