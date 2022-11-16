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

const without = function(source, itemsToRemove) {
  let outputArray = [];
  let isElementCommon = false;

  for (let i in source) {
    outputArray.push(source[i])
  }
  
  for (let i = 0; i < outputArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (outputArray[i] === itemsToRemove[j]) {
        isElementCommon = true;
      }
      if (isElementCommon) {
        outputArray.splice(i,1);
        isElementCommon = false;
        if (outputArray.length > 0) {
          i -= 1;
        }
      } 
    }
  }
  return outputArray;
};



//const actual = without(["hello", "world", "lighthouse"], ["world","lighthouse"]);
//const expected = ["hello"];
//console.log("actual:", actual);
//console.log("expected", expected);
//assertArraysEqual(actual,expected);


//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
//console.log("words", words);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//console.log(without(["5", "6", "7"], [5, 6, "7"])); 
//console.log(without(["1", "2", "3"], [1,"3", 2]));
//console.log(without([1, 2, 3, 4, 5], [1,4]));
