
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

module.exports = without;