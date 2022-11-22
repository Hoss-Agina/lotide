const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word[0]),["h","e","l","l","o"]);
assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word+"addedtext"),["helloaddedtext","everyoneaddedtext","laaddedtext","leeaddedtext","ohh!addedtext"]);
assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word[200]),[undefined,undefined,undefined,undefined,undefined]);