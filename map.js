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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word[0]),["h","e","l","l","o"]);
assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word+"addedtext"),["helloaddedtext","everyoneaddedtext","laaddedtext","leeaddedtext","ohh!addedtext"]);
assertArraysEqual(map(["hello","everyone","la","lee","ohh!"],word => word[200]),[undefined,undefined,undefined,undefined,undefined]);