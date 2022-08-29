const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([4, 5, 6, 'ew'], [4, 5, 6, 'ew']), true);
// assertEqual(eqArrays([1, 2, [1, 2]], [1, 2, [1, 2]]), true);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);

describe("#head on the happy path", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true for [4, 5, 6, 'ew'], [4, 5, 6, 'ew']", () => {
    assert.strictEqual(eqArrays([4, 5, 6, 'ew'], [4, 5, 6, 'ew']), true);
  });
  it("returns true for", () => {
    assert.strictEqual(eqArrays([1, 2, [1, 2]], [1, 2, [1, 2]]), true);
  });
});

describe("#head on the sad path", () => {
  it("returns false for [1, 2, 3], [1, 2, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });
  it("returns false for [1, 2, 3], [1, 3, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
  });
});