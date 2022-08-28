const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arrayOne, arrayTwo) => {
  return arrayOne.toString() === arrayTwo.toString();
};

const eqObjects = (object1, object2) => {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  
  // if the arguments aren't objects
  if (!typeof(object1) === 'object') {
    return false;
  }

  // if the objects don't have the same number of properties, they can't be equal
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // iterate for each property in object1
  for (let prop in object1) {
    
    // if value of property is an object (or array)
    if (typeof(object1[prop]) === 'object') {

      // handle the case that the property value is an object
      if (!Array.isArray(object1[prop])) {
        
        // call function recursively, if false return false
        if(!eqObjects(object1[prop], object2[prop])) {
          return false;
        }
        
        // objects match, skip to next property
        continue;
      }

      // if arrays; call eqArrays to see if those arrays match
      if (!eqArrays(object1[prop], object2[prop])) {
        return false;
      }

      // arrays match, skip to next property
      continue;
    } // end object/array if

    // if value of property is not an object, and they don't match
    if (object1[prop] !== object2[prop]) {
      return false;
    }
  }

  // if no filter catches a mismatch
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

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false