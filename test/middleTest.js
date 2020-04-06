const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

let arrayTest = [1, "b", "c", 4, 5];
let arrayTest2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assertArraysEqual(middle(arrayTest), ["c"])
assertArraysEqual(middle(arrayTest), ["d"]) // --> fail
assertArraysEqual(middle(arrayTest2), [5, 6])