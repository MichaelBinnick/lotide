const map = (array, action) => {
  let results = [];
  for (let item of array) {
    results.push(action(item));
  }
  return results;
};

module.exports = map;