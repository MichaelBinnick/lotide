const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
assertEqual(eqArrays([4, 5, 6, 'ew'], [4, 5, 6, 'ew']), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, [1, 2]], [1, 2, [1, 2]]), true);