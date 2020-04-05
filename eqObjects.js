const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.toString("") === array2.toString("")) {
    return true;
  } else {
    return false;
  }
};

// create function eqObejects
// compares 2 objects to see if they are equal
// object equal when same number of keys
  // need to determine number of keys
// object equal when value for each key is the same as same key value in other object

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
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// console.log(eqObjects(cd, dc))