const assert = require('chai').assert;
const countLetters = require('../countLetters')

describe("#countLetters", () => {
  it("returns 3 when given ['m']", () => {
    assert.deepEqual(countLetters("My name is Amy")['m'], 3)
  });
  it("returns 2 when given ['a']", () => {
    assert.deepEqual(countLetters("My name is Amy")['a'], 2)
  });
  it("returns letter count in an object when given 'My name is Amy'", () => {
    assert.deepEqual(countLetters("My name is Amy"), { m: 3, y: 2, n: 1, a: 2, e: 1, i: 1, s: 1 } )
  });
});
