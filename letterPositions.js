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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(index);
    }
  }
  return results;
};



// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);