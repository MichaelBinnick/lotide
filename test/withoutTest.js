const assert = require('chai').assert;
const without = require('../index.js').without;

describe("#without on the happy path", () => {
  it("returns [1, 2] for ([1, 2, 3], [3])", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });
  it("returns [2, 2] for ([2, 2, 3], [3])", () => {
    assert.deepEqual(without([2, 2, 3], [3]), [2, 2]);
  });
  it("returns [1, 2] for ([1, 2, 3, 'hi'], [3, 'hi'])", () => {
    assert.deepEqual(without([1, 2, 3, 'hi'], [3, 'hi']), [1, 2]);
  });
});