const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(array1, array2) {
  let compareArray = eqArrays(array1, array2);
  
  if (compareArray) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !==  ${array2}`);
  }
};

// take in array to map
// call back function
// will return new array

const words = ["ground", "control", "to", "major", "tom"];
const nestedArray = [[1,2],[3,4],[5,6]];

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let results1 = map(words, word => word[0]);
console.log(results1);

let results2 = map(words, word => word.length);
console.log(results2);

let results3 = map(nestedArray, arr => arr[0]);
console.log(results3);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [1, 3, 5]);