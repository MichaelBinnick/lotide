const assert = require('chai').assert;
const findKeyByValue = require('../index.js').findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  anime: "Evangelion",
  comic: "Loki"
};

describe("#findKeyByValue on the happy path", () => {
  it("returns 'drama' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("returns undefined for (bestTVShowsByGenre, 'That '70s show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns undefined for (bestTVShowsByGenre, 'Dexter')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Dexter"), undefined);
  });
  it("returns 'comic' for (bestTVShowsByGenre, 'Loki')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Loki"), 'comic');
  });
  it("returns 'anime for (bestTVShowsByGenre, 'Evangelion')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Evangelion"), 'anime');
  });
});