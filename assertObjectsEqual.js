const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const eqObjects = (object1, object2) => {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let i = 0; i < object1Keys.length; i++) {
    const keyOfIndex = object1Keys[i];
    if (Array.isArray(object1[keyOfIndex]) && Array.isArray(object2[keyOfIndex])) {
      if (eqArrays(object1[keyOfIndex], object2[keyOfIndex])) {
        return true;
      }
    }
    if (object1[keyOfIndex] !== object2[keyOfIndex]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`😀😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🤢🤢🤢Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1});