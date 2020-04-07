const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns a list of letters with an array value defining which index each letter is at ", () => {
    assert.deepEqual(letterPositions("My name is Amy"), { M: [ 0 ], y: [ 1, 13 ], n: [ 3 ], a: [ 4 ], m: [ 5, 12 ], e: [ 6 ], i: [ 8 ], s: [ 9 ], A: [ 11 ] });
  })
  it("returns [6] when 'My name is Amy'.e is given", () => {
    assert.deepEqual(letterPositions("My name is Amy").e, [6]);
  })
  it("returns undefined when 'My name is Amy'.f is given", () => {
    assert.deepEqual(letterPositions("My name is Amy").f, undefined);
  });
});
