const _ = require("../index");

const words = ["ground", "control", "to", "major", "tom"];

const results1 = _.map(words, word => word[0]);
console.log(results1);

_.assertArraysEqual(_.map(["hello","everyone","la","lee","ohh!"],word => word[0]),["h","e","l","l","o"]);
_.assertArraysEqual(_.map(["hello","everyone","la","lee","ohh!"],word => word + "addedtext"),["helloaddedtext","everyoneaddedtext","laaddedtext","leeaddedtext","ohh!addedtext"]);
_.assertArraysEqual(_.map(["hello","everyone","la","lee","ohh!"],word => word[200]),[undefined,undefined,undefined,undefined,undefined]);