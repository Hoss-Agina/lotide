const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`πͺπͺπͺ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`πΊπΊπΊ Assertion Failed ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;