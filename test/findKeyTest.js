const assert = require('chai').assert;
const findKey = require('../findKey');

const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

describe("#findKey", () => {
  it("returns 'Akaleri' when given x.stars === 3 ", () => {
    assert.deepEqual(findKey(testObject, x => x.stars === 3), "Akaleri")
  });
  it("returns 'Blue Hill' when given x.stars === 1 ", () => {
    assert.deepEqual(findKey(testObject, x => x.stars === 1), "Blue Hill")
  });
  it("returns 'noma' when given x.stars === 2 ", () => {
    assert.deepEqual(findKey(testObject, x => x.stars === 2), "noma")
  });
  it("returns undefined when given x.stars === 5 ", () => {
    assert.deepEqual(findKey(testObject, x => x.stars === 5), undefined)
  });
});
