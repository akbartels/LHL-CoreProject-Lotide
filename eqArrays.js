
const eqArrays = function(array1, array2) {
  if (array1.toString("") === array2.toString("")) {
    return true;
  } else {
    return false;
  }
};



module.exports = eqArrays;