const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
assertArraysEqual(middle([1, 3, 37]), [3]); // should pass
assertArraysEqual(middle([2, 7, 31, 46]), [7, 46]); // should fail
assertArraysEqual(middle(['hi', 'hello', 'yo']), ['hello']); // should pass
assertArraysEqual(middle(['you', 'rule', 'at', 'coding']), ['rule', 'at']); // should pass