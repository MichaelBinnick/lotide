const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🤢🤢🤢Assertion Failed: ${arrayOne} === ${arrayTwo}`);
};

const takeUntil = (array, callback) => {
  let results = [];
  for (let item of array) {
    if(callback(item) === true) {
      return results;
    }
    results.push(item);
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [2, 4, 6, 8, 9];
const results3 = takeUntil(data3, num => num % 2 !== 0);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [2, 4, 6, 8]);