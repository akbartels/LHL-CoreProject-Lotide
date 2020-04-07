const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns true when ab and ba are given ", () => {
    assert.deepEqual(eqObjects(ab, ba), true)
  });
  it("returns false when ab and abc are given ", () => {
    assert.deepEqual(eqObjects(ab, abc), false)
  });
  it("returns true when cd and dc are given ", () => {
    assert.deepEqual(eqObjects(cd, dc), true)
  });
  it("returns false when cd and cd2 are given ", () => {
    assert.deepEqual(eqObjects(cd, cd2), false)
  });
});

