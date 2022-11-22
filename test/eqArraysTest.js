// const _ = require("../index");

// console.log(_.eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(_.eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
// console.log(_.eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

// _.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);

// const _ = require("../index");
const assert = require('chai').assert;
const _ = require("../index");

describe("eqArrays", () => {
  it("returns true because [1, 2, 3] === [1, 2, 3] which returns true === true", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
  it("returns [1, 2, 3] is NOT equal to [3, 2, 1] so  false === false expected value thus true", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3],[3, 2, 1]), false);
  });
  it("returns ['1', '2', '3'] is equal to ['1', '2', '3'] so true === true thus true", () => {
    assert.strictEqual(_.eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns ['1', '2', 3] is NOT equal to ['1', '2', 3] to be false === false thus true", () => {
    assert.strictEqual(_.eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("returns ['1', '2', '3'] is NOT equal to ['1', '2', '3', 4] to be false === false thus true", () => {
    assert.strictEqual(_.eqArrays(['1', '2', '3'], ['1', '2', '3', 4]), false);
  });
});