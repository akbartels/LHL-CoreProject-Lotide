const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' when given bestTVShowsByGenre and 'The Wire' ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama" );
  });
  it("returns 'sciFi' when given bestTVShowsByGenre and 'The Expanse' ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi" );
  });
  it("returns underfined when given bestTVShowsByGenre and 'That 70's Show' ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined );
  });
});




// // console.log(findKeyByValue(bestTVShowsByGenre, "The"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);