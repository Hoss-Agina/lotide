// const eqArrays = function(arr1,arr2) {
//   // if (!arr1 || !arr2) {
//   //   return false;
//   // }
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i in arr1) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;