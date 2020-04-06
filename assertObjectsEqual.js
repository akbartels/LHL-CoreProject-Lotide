const eqObjects = function(object1, object2) {
  const keysOb1 = Object.keys(object1);
  //turns into array of stringed keys: ["a", "b"]
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

const eqArrays = function(array1, array2) {
  if (array1.toString("") === array2.toString("")) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const compareObjects = eqObjects(object1, object2);

  if (compareObjects) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);