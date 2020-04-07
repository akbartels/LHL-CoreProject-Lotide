
// use filter?
//
// call back will return true or false


const takeUntil = function(array, callback) {
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0,i);
    }
  }
};

module.exports = takeUntil;