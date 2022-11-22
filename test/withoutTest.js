const _ = require("../index");

const actual = _.without(["hello", "world", "lighthouse"], ["world","lighthouse"]);
const expected = ["hello"];
console.log("actual:", actual);
console.log("expected", expected);
_.assertArraysEqual(actual,expected);


const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log("words", words);
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(_.without(["5", "6", "7"], [5, 6, "7"])); 
console.log(_.without(["1", "2", "3"], [1,"3", 2]));
console.log(_.without([1, 2, 3, 4, 5], [1,4]));