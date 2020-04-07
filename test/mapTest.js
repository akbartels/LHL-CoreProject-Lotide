const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const nestedArray = [[1,2],[3,4],[5,6]];
let results1 = map(words, word => word[0]);
let results2 = map(words, word => word.length);
let results3 = map(nestedArray, arr => arr[0]);

describe("#map", () => {
  it("returns first letter of every word from words", () => {
    console.log(map(words, word => word[0]))
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns how mant letters are in each word of words", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it("returns the first index of each array within nestedArray", () => {
    assert.deepEqual(map(nestedArray, arr => arr[0]), [1, 3, 5]);
  });
});