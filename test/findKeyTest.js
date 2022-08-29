const assert = require('chai').assert;
const findKey = require('../index.js').findKey;

describe("#findKey on the happy path", () => {
  it(`returns "noma" with ({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)`, () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
  it("returns 'b' with ({ a: 1, b: 2, c: 3 }, value => value % 2 === 0)", () => {
    assert.strictEqual(findKey({ a: 1, b: 2, c: 3 }, value => value % 2 === 0), 'b');
  });
  it("returns undefined with ({ a: 1, b: 2, c: 3 }, value => value % 4 === 0)", () => {
    assert.strictEqual(findKey({ a: 1, b: 2, c: 3 }, value => value % 4 === 0), undefined);
  });
});