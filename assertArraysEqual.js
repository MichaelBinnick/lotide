const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🤢🤢🤢Assertion Failed: ${arrayOne} === ${arrayTwo}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([2, 2, 3], [1, 2, 3]);
assertArraysEqual(['hi'], ['hi']);