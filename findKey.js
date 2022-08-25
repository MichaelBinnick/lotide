const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (object, callback) => {
  // loop over object keys
  for (const key in object) {
    // apply callback to each key
    if (callback(object[key])) {
      // if true, return that key
      return key;
    }
  }
}

assertEqual(findKey({ a: 1, b: 2, c: 3 }, value => value % 2 === 0), 'b'); // "b"
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');
assertEqual(findKey({ a: 1, b: 2, c: 3 }, value => value % 4 === 0), undefined);
