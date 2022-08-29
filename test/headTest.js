const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
assertEqual(head([2]), 2);
assertEqual(head(['hi', 'hello']), 'hi');
assertEqual(head(['yikes', 2, 33, 4]), 'yikes');
assertEqual(head([true, false]), true);