// assertArraysEqual = require('../assertArraysEqual');
// middle = require('../middle');

// actual = middle([1,2,3,4,5]);
// expected = [3];
// assertArraysEqual(actual, expected)

const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(_.middle([1,2,3,4]), [2,3]);
  });
});
