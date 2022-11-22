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

module.exports = countOnly;