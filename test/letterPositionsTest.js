// const _ = require("../index");

// console.log(_.letterPositions("lighthouse in the house"));
// _.assertArraysEqual(_.letterPositions("hello").e, [1]);

const _ = require("../index");
const assert = require('chai').assert;

describe("letterPositions", () => {

  it("returns true because the count of the letter e in 'hello' is 1 (return value is array [1] thus true)", () => {
    assert.deepEqual(_.letterPositions("hello").e, [1]);
  });
});