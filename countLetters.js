const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letterArray = str.split("");
  let obj = {};
  for (let letter of letterArray) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  delete obj[" "];
  return obj;
};

//console.log(countLetters("lighthouse in the house"));