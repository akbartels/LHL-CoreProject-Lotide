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

assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["Amy", "Nolan"], ["Amy", "Nolan"]);
assertArraysEqual(["Amy", "Nolan"], ["Amy", "Nolan", "Sarah"]);

// function called assertArraysEqual
// takes in 2 arrays
// passes the 2 arrays into the eqArray function
// return true or false
// if true console.log(pass)
// if false console.log(fail)