const assertEqual = require("../assertEqual");
const tail = require("../tail.js");

assertEqual("Lighthouse Labs", "Bootcamp"); // --> fail
assertEqual(1, 1);
assertEqual(1, 6); // --> fail
assertEqual("amy", "amy");

console.log("-------")

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[1], "Labs");
assertEqual(result[1], "Lighthouse"); // --> fail

console.log("-------")

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log((tail(words)));
assertEqual(words.length, 3);