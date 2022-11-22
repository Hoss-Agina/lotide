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

module.exports = without;
