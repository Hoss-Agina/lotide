const assertObjectsEqual = require('../assertObjectsEqual')

objectOne = {
  name: "Hoss",
  age: [34, 33, 32],
  class: "LHL"
}

objectTwo = {
  class: "LHL",
  age: [34, 33, 32],
  name: "Hoss"
}

assertObjectsEqual(objectOne, objectTwo);