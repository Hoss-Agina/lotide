const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

const actual = without(["hello", "world", "lighthouse"], ["world","lighthouse"]);
const expected = ["hello"];
console.log("actual:", actual);
console.log("expected", expected);
assertArraysEqual(actual,expected);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log("words", words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(["5", "6", "7"], [5, 6, "7"])); 
console.log(without(["1", "2", "3"], [1,"3", 2]));
console.log(without([1, 2, 3, 4, 5], [1,4]));