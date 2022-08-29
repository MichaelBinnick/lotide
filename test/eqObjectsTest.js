const eqObjects = require('../eqObjects.js');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects on the happy path", () => {
  it("returns true for (ab,ba)", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns true for (cd,dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});

describe("#eqObjects on the sad path", () => {
  it("returns false for (ab,abc)", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns false for (cd,cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});