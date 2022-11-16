const eqArrays = function(arr1,arr2) {
  let isEqual = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};


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


//actual = middle([1,2,3,4,5]);
//expected = [3];
//assertArraysEqual(actual, expected)