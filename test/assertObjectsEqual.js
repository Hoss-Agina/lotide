const _ = require('../index')

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

_.assertObjectsEqual(objectOne, objectTwo);