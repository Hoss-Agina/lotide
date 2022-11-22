const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);