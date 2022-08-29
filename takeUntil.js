const takeUntil = (array, callback) => {
  let results = [];
  for (let item of array) {
    if(callback(item) === true) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;