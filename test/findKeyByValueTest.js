const _ = require("../index");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);