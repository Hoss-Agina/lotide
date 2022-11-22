// const _ = require("../index");

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// _.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// _.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);

const _ = require("../index");
const assert = require('chai').assert;

describe("findKeybyValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns true because the genre of the movie 'The Wire' is 'drama' so boolean is true when comparing", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns true because the genre of the movie the show 'that 70s show' is not part of bestTVshows so it will return undefined ", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});