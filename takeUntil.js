const takeUntil = function(array, callback) {
  let newArr = [];
  for (let value of array) {
    if (!callback(value)) {
      newArr.push(value);
    } else {
      return newArr;
    }
  }
};

module.exports = takeUntil;