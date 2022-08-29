const assert = require('chai').assert;
// const head = require('../head'); // default function
const {head} = require('../index.js'); // non-default function

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1); 
  });
  it("returns 2 for [2]", () => {
    assert.strictEqual(head([2]), 2); 
  });
  it("returns 'hi' for ['hi', 'hello']", () => {
    assert.strictEqual(head(['hi', 'hello']), 'hi'); 
  });
  it("returns 'yikes' for ['yikes', 2, 33, 4]", () => {
    assert.strictEqual(head(['yikes', 2, 33, 4]), 'yikes'); 
  });
  it("returns true for [true, false]", () => {
    assert.strictEqual(head([true, false]), true); 
  });
});