const middle = function(arr) {
  let middleArray = [];
  //if array length is 1 or 2 then an amepty array is returned
  if (arr.length === 1 || arr.length === 2) {
    return middleArray;
  }
  //if array length is greater than 1 or 2 AND has an even length then two middle elements of arr are returned
  if (arr.length % 2 === 0) {
    let middleElementOne = arr[arr.length / 2] - 1;
    let middleElementTwo = arr[(arr.length / 2)];
    middleArray.push(middleElementOne);
    middleArray.push(middleElementTwo);
    return middleArray;
    //if array length is greater than 1 or 2 AND has an odd length than middle element then the middle element is returned
  } else {
    let middleElement = arr[Math.floor(arr.length / 2)];
    middleArray.push(middleElement);
    return middleArray;
  }
};

module.exports = middle;