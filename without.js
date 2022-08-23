const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed`) : console.log(`🤢🤢🤢Assertion Failed`);
};

const without = (source, itemsToRemove) => {
  let output = [];
  for (let sourceItem of source) {
    let toRemove = false;
    for (let removalItem of itemsToRemove) {
      (sourceItem === removalItem) && (toRemove = true);
    }
    (toRemove === false) && (output.push(sourceItem));
  }
  return output;
};

assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([1, 2, 3], [3]), [2, 2]);
assertArraysEqual(without([1, 2, 3, 'hi'], [3, 'hi']), [1, 2]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);