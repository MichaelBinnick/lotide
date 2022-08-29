const eqArrays = require('./eqArrays.js');

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

module.exports = eqObjects;