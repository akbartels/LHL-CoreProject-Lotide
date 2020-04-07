

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


module.exports = countLetters;