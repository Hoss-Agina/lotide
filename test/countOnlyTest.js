// const _ = require("../index");

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// _.assertEqual(result1["Jason"], 1);
// _.assertEqual(result1["Karima"], undefined);
// _.assertEqual(result1["Fang"], 2);
// _.assertEqual(result1["Agouhanna"], undefined);

// console.log(_.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const _ = require("../index");
const assert = require('chai').assert;

describe("#tail", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  it("returns true because the key-value for jason in the object is 1", () => {
    assert.strictEqual(_.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Jason"], 1);
  });
  it("returns true because the key-value for Karima in the return object is not there so it is undefined", () => {
    assert.strictEqual(_.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Karima"], undefined);
  });
  it("returns true because the key-value for fang in the return object is 2", () => {
    assert.strictEqual(_.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Fang"], 2);
  });
  it("returns true because the key-value for Agouhanna in the object is not there so it is undefined", () => {
    assert.strictEqual(_.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Agouhanna"], undefined);
  });
});