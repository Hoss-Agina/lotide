const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀🪀🪀 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`👺👺👺 Assertion Failed ${actual} !== ${expected}`);
  }
};

/*older complex solution alternative
const countOnly = function(allItems, itemsToCount) {
  let statsObject = {};

  for (let key in itemsToCount) {
    let count = 0;
    for (firstName of allItems) {
      if (firstName === key && itemsToCount[key] === true) {
        count += 1;
      }
    }
    if (count !== 0) {
      statsObject[key] = count;
    }
  }
  return statsObject;
};
*/

const countOnly = function(allItems, itemsToCount) {
  let statsObject = {};
  for (let firstName of allItems) {
    if (itemsToCount[firstName]) {
      if (statsObject[firstName]) {
        statsObject[firstName] += 1;
      } else {
        statsObject[firstName] = 1;
      }
    }
  }
  return statsObject;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

// console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));