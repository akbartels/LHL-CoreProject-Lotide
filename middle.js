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

// create function named: middle
// should return a new array with only middle elements  of array
// length of returned array could vary: odd should give one element, even should give two
// need to determine length of array
// 


const middle = function(array) {
  let result = [];
  let length = array.length;
  let half = length / 2;
    
  if (length % 2 === 0) {
    result.push(array[half-1], array[half]);
  } else {
    result.push(array[Math.floor(half)]);
  }
  return result;
};

let arrayTest = [1, "b", "c", 4, 5];

assertArraysEqual(middle(arrayTest), ["c"])

