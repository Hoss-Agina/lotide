const _ = require("../index");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');
console.log(results2);

_.assertArraysEqual(_.takeUntil([101,200,400,600,234,23,200,700], x => x < 100),[101,200,400,600,234]);