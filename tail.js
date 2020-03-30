const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 6);
// assertEqual("amy", "amy");

const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
(tail(words));
assertEqual(words.length, 3);