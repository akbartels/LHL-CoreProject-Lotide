const assert = require('chai').assert
const tail = require("../tail.js");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] given ['Hello', 'Lighthouse', 'Labs'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("returns [2, 'c', 'd'] given [1, 2, 'c', 'd']", () => {
    assert.deepEqual(tail([1, 2, 'c', 'd']), [2, 'c', 'd'])
  });
  it("returns [2, 3, 4] given [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  });
  it("returns 3 given tail([1, 2, 3, 4]).length", () => {
    assert.deepEqual(tail([1, 2, 3, 4]).length, 3)
  });
});
