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

module.exports = countLetters;