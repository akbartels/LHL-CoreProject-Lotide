const assertEqual = require('./assertEqual');

// take in a string
// return a count of each of the letters in string
// return object with letter counts
// skip over spaces


const countLetters = function(string) {
  let newString = string.split(" ").join("").toLowerCase();
  let result = {};
  
  for (let letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};



let testString = "My name is Amy";


assertEqual(countLetters(testString)['m'], 3);
assertEqual(countLetters(testString)['a'], 2);
assertEqual(countLetters(testString)['i'], 1);