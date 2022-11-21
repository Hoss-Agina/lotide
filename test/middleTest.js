assertArraysEqual = require('../assertArraysEqual');
middle = require('../middle');

actual = middle([1,2,3,4,5]);
expected = [3];
assertArraysEqual(actual, expected)