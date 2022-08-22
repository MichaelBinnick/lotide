const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(true, 1);
assertEqual(true, 1 === 1);
assertEqual('10', 10);
assertEqual('hi', 'hi');
assertEqual('hi', 'hello');
assertEqual(10, 15);