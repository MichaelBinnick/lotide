const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo) ? console.log(`😀😀😀Assertion Passed`) : console.log(`🤢🤢🤢Assertion Failed`);
};

const letterPositions = sentence => {
  let sentenceCopy = sentence;
  let results = {};
  for (let i = 0; i < sentenceCopy.length; i++) {
    let uniqueCharProps = Object.keys(results);
    let char = sentenceCopy[i];
    (!uniqueCharProps.includes(char) && results[char] === undefined && char !== " " ? results[char] = [i]
      : (char !== " ") && (results[char].push(i)));
  }
  return results;
};

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);