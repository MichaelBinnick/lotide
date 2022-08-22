const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const head = array => {
  return array[0];
};

// TEST CODE
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
assertEqual(head([2]), 2);
assertEqual(head(['hi', 'hello']), 'hi');
assertEqual(head(['yikes', 2, 33, 4]), 'yikes');
assertEqual(head([true, false]), true);