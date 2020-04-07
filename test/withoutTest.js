const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3, 4, 5, 6]

describe("#without", () => {
  it("returns ['hello', 'world'] when given words array without ['Lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"] )
  });
  it("returns [2, 3, 4, 6] when given numbers array without [1, 5]", () => {
    assert.deepEqual(without(numbers, [1, 5]), [2, 3, 4, 6] )
  });
  it("returns [1, 2, 3, 4, 5, 6] when given numbers array without []", () => {
    assert.deepEqual(without(numbers, []), [1, 2, 3, 4, 5, 6] )
  });
});