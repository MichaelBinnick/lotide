const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed`) : console.log(`🤢🤢🤢Assertion Failed`);
};

const middle = array => {
  let result = [];
  let length = array.length;
  if (length <= 2) {
    return result;
  }
  length % 2 ? result.push(array[Math.floor(length / 2)])
    : result.push(array[Math.floor((length / 2) - 1)]) && result.push(array[Math.ceil(length / 2)]);
  return result;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
assertArraysEqual(middle([1, 3, 37]), [3]); // should pass
assertArraysEqual(middle([2, 7, 31, 46]), [7, 46]); // should fail
assertArraysEqual(middle(['hi', 'hello', 'yo']), ['hello']); // should pass
assertArraysEqual(middle(['you', 'rule', 'at', 'coding']), ['rule', 'at']); // should pass