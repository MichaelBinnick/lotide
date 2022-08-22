const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const tail = array => {
  let outputArray = [];
  for (let i = 1; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
};

let testArray = [1, 2, 3];
assertEqual(tail(testArray).length, testArray.length - 1);
assertEqual(testArray[1], tail(testArray)[0]);

let words = ['hi', 'yo', 'sup'];
tail(words);
assertEqual(words.length, 3);

let emptyArrayTest = [1];
assertEqual(tail(emptyArrayTest).length, 0);

let superEmptyArrayTest = [];
assertEqual(tail(superEmptyArrayTest).length, 0);