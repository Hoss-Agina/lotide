const eqArrays = function(arr1,arr2) {
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};

//assertArraysEqual([1, 2, 3], [1, 2, 3]);