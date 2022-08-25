const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🤢🤢🤢Assertion Failed: ${arrayOne} === ${arrayTwo}`);
};

const map = (array, action) => {
  let results = [];
  for (let item of array) {
    results.push(action(item));
  }
  return results;
};

const numbers = [1, 2, 3, 4, 5];
const wereWolves = [{ form: 'human', moon: 'full' }, { form: 'wolf', moon: 'half'}];
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0] + word[1]), ['gr', 'co', 'to', 'ma', 'to']);
assertArraysEqual(map(numbers, number => number + 1), [2, 3, 4, 5, 6]);
