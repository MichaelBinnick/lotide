const assert = require('chai').assert;
const flatten = require('../index.js').flatten;

describe("#flatten on the happy path", () => {
  it("returns [1, 2, 1, 2] for ([1, 2, [1, 2]])", () => {
    assert.deepEqual(flatten([1, 2, [1, 2]]), [1, 2, 1, 2]);
  });
  it("returns ['candy', 'apple', 'chocolate', 'twix'] for (['candy', 'apple', ['chocolate', 'twix']])", () => {
    assert.deepEqual(flatten(['candy', 'apple', ['chocolate', 'twix']]), ['candy', 'apple', 'chocolate', 'twix']);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for ([1, 2, [3, 4], 5, [6, 7], 8])", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });
});