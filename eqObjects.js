const eqArrays = require('./eqArrays');

// create function eqObejects
// compares 2 objects to see if they are equal
// object equal when same number of keys
  // need to determine number of keys
// object equal when value for each key is the same as same key value in other object

const eqObjects = function(object1, object2) {
  //turns into array of stringed keys: ["a", "b"] and ["b", "a"]
  const keysOb1 = Object.keys(object1); 
  const keysOb2 = Object.keys(object2);
 
  if (keysOb1.length === keysOb2.length) {
    for (let key of keysOb1) {
      if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } 
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;

