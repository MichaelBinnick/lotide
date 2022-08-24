const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  anime: "Evangelion",
  comic: "Loki"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dexter"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Loki"), "comic");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Evangelion"), "anime");