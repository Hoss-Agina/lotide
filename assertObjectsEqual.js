const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`πͺπͺπͺ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`πΊπΊπΊ Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;