const assert = require('chai').assert;
const takeUntil = require('../index.js').takeUntil;


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const data3 = [2, 4, 6, 8, 9];
const results3 = takeUntil(data3, num => num % 2 !== 0);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(results3, [2, 4, 6, 8]);

describe("#takeUntil on the happy path", () => {
  it("returns [1, 2, 5, 7, 2] for results1", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it(`returns ["I've", "been", "to", "Hollywood"] for results 2`, () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
  it("returns [2, 4, 6, 8] for results3", () => {
    assert.deepEqual(results3, [2, 4, 6, 8]);
  });
});