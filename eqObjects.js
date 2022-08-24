const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);