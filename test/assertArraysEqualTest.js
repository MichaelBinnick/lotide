const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([2, 2, 3], [1, 2, 3]);
assertArraysEqual(['hi'], ['hi']);