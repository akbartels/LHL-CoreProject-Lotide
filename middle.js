
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



module.exports = middle;