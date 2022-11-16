const eqArrays = function(arr1,arr2) {
  let isEqual = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);