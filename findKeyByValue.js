const findKeyByValue = function(movieObject, str) {
  for (let key in movieObject) {
    if (str === movieObject[key]) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;