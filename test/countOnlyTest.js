const assert = require('chai').assert;
const countOnly = require('../index.js').countOnly;

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { 
  "Jason": true,
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
});

describe("#countOnly on the happy path", () => {
  it("returns 1 for result1['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for result1['Karima'] (true in rules, but does not appear in list)", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("returns 2 for result1['Fang']", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for result1['Agouhanna'] (false in rules, does appear in list)", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});