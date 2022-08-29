const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

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