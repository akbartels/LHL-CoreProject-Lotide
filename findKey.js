
// function named findKey
// takes in an object and a callback
// should return first key for which callback returns truthy
// if no key, return undefined
//
//


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


module.exports = findKey;