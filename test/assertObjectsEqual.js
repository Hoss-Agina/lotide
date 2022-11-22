const _ = require('../index');

let objectOne = {
  name: "Hoss",
  age: [34, 33, 32],
  class: "LHL"
};

let objectTwo = {
  class: "LHL",
  age: [34, 33, 32],
  name: "Hoss"
};

_.assertObjectsEqual(objectOne, objectTwo);