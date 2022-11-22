// const _ = require("../index");

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// _.assertEqual(_.eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// _.assertEqual(_.eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// _.assertEqual(_.eqObjects(cd, dc),true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// _.assertEqual(_.eqObjects(cd, cd2),false);

const _ = require("../index");
const assert = require('chai').assert;

describe("eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("returns true because the objects ab and ba are the same(true === true))", () => {
    assert.strictEqual(_.eqObjects(ab, ba), true);
  });
  it("returns true because the objects ab and abc are NOT the same (false === false))", () => {
    assert.strictEqual(_.eqObjects(ab, abc), false);
  });
  it("returns true because the objects cd and dc are the same (true === true))", () => {
    assert.strictEqual(_.eqObjects(cd, dc), true);
  });
  it("returns true because the objects cd and cd2 are the NOT the same (false === false)", () => {
    assert.strictEqual(_.eqObjects(cd, cd2), false);
  });
});