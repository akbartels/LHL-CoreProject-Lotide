const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // --> fail
assertArraysEqual(["Amy", "Nolan"], ["Amy", "Nolan"]);
assertArraysEqual(["Amy", "Nolan"], ["Amy", "Nolan", "Sarah"]); // --> fail

// function called assertArraysEqual
// takes in 2 arrays
// passes the 2 arrays into the eqArray function
// return true or false
// if true console.log(pass)
// if false console.log(fail)