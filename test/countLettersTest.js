const assert = require('chai').assert;
const countLetters = require('../index.js').countLetters;

describe("#countLetters on the happy path", () => {
  it("returns 1 for property H of the object returned by countLetters('Hello, I am Mike')", () => {
    assert.strictEqual(countLetters('Hello, I am Mike').H, 1);
  });
  it("returns 1 for property '3' of the object returned by countLetters('54 67 32')", () => {
    assert.strictEqual(countLetters('54 67 32')[3], 1);
  });
  it("returns 2 for property o of the object returned by countLetters('I am Groot')", () => {
    assert.strictEqual(countLetters('I am Groot').o, 2);
  });
  it("returns 1 for property z of the object returned by countLetters('Lighthouse roolz')", () => {
    assert.strictEqual(countLetters('Lighthouse roolz').z, 1);
  });
  it("returns 1 for property '!' of the object returned by countLetters('Bootcamp is easy!')" , () => {
    assert.strictEqual(countLetters('Bootcamp is easy!')['!'], 1);
  });
});