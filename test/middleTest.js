const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3] for [1, 3, 37]", () => {
    assert.deepEqual(middle([1, 3, 37]), [3]);
  });
  it("returns [7, 31] for [2, 7, 31, 46]", () => {
    assert.deepEqual(middle([2, 7, 31, 46]), [7, 31]);
  });
  it("returns ['hello'] for ['hi', 'hello', 'yo']", () => {
    assert.deepEqual(middle(['hi', 'hello', 'yo']), ['hello']);
  });
  it("returns ['rule', 'at'] for ['you', 'rule', 'at', 'coding']", () => {
    assert.deepEqual(middle(['you', 'rule', 'at', 'coding']), ['rule', 'at']);
  });
});