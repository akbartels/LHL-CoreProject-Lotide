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

// function called: without
// takes in 2 arrays: Source, itemsToRemove
// return a NEW ARRAY containing Source minus itemsToRemove

const without = function(source, itemsToRemove) {
  let result = source;
  for (let item of itemsToRemove) {
    result = result.filter(res => item !== res);
  }
  // console.log(result); use to test result
  return result;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
