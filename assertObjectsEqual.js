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

const eqObjects = function(object1, object2) {
  let arrOne = Object.keys(object1);
  let arrTwo = Object.keys(object2);
  if (arrOne.length !== arrTwo.length) {
    return false; 
  } else {
    for (let key of arrOne) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// objectOne = {
//   name: "Hoss",
//   age: [34, 33, 32],
//   class: "LHL"
// }

// objectTwo = {
//   class: "LHL",
//   age: [34, 33, 32],
//   name: "Hoss"
// }

// assertObjectsEqual(objectOne, objectTwo);