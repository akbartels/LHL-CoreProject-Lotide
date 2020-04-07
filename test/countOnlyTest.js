
const assert = require('chai').assert;
const countOnly = require('../countOnly');

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

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } when given firstName, { 'Jason': true, 'Karima': true, 'Fang': true } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { Fang: 2, Jason: 1 })
  });
  it("returns { Fang: 2} when given firstNames and { 'Jason': false, 'Karima': true, 'Fang': true } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true }), { Fang: 2 })
  });
});

