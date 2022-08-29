const middle = array => {
  let result = [];
  let length = array.length;
  if (length <= 2) {
    return result;
  }
  length % 2 ? result.push(array[Math.floor(length / 2)])
  : result.push(array[Math.floor((length / 2) - 1)]) && result.push(array[Math.ceil(length / 2)]);
  return result;
};

module.exports = middle;