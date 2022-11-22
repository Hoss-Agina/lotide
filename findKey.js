const findKey = function(Object, func) {
  for (let key in Object) {
    if (func(Object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;