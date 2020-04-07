
// create function findKeyByValue
// takes 2 arguments: object and value
// loop through object
// compare object key value to defined value
// first key that has defined value and return that key
// if no matching key value return undefined

const findKeyByValue = function(object, value) {
  
  for (let key in object) {
    //console.log(key)
    //console.log(object[key]);
    if (object[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;