const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed`) : console.log(`🤢🤢🤢Assertion Failed`);
};

const flatten = array => {
  let output = [];
  for (let element of array) {
    Array.isArray(element) ? (element.forEach(contents => { output.push(contents); })) : output.push(element);
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [1, 2]]), [1, 2, 1, 2]);
assertArraysEqual(flatten(['candy', 'apple', ['chocolate', 'twix']]), ['candy', 'apple', 'chocolate', 'twix']);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8])