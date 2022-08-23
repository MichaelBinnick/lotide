const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
assertEqual(eqArrays([4, 5, 6, 'ew'], [4, 5, 6, 'ew']), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([1, 2, [1, 2]], [1, 2, [1, 2]]), true);