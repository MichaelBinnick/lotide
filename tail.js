const tail = array => {
  let outputArray = [];
  for (let i = 1; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
};

module.exports = tail;