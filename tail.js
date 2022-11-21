const tail = function(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = tail;