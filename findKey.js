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

module.exports = findKey;