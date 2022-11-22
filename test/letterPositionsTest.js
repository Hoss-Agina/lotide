const _ = require("../index");

console.log(_.letterPositions("lighthouse in the house"));
_.assertArraysEqual(_.letterPositions("hello").e, [1]);