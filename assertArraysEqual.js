const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`πͺπͺπͺ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`πΊπΊπΊ Assertion Failed ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;