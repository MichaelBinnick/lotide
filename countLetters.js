const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  let sentenceNoSpace = sentence.split(" ").join("");
  let results = {};
  for (let char of sentenceNoSpace) {
    let uniqueCharProps = Object.keys(results);
    (!uniqueCharProps.includes(char)) && results[char] === undefined ? results[char] = 1
      : results[char] ++;
  }
  return results;
};

assertEqual((countLetters('Hello, I am Mike').H), 1);
assertEqual((countLetters('54 67 32')[3]), 1);
assertEqual((countLetters('I am Groot').o), 2);
assertEqual((countLetters('Lighthouse roolz').z), 1);
assertEqual((countLetters('Bootcamp is easy!')['!']), 1);