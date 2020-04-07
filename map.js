
// take in array to map
// call back function
// will return new array

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;