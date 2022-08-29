const flatten = array => {
  let output = [];
  for (let element of array) {
    Array.isArray(element) ? (element.forEach(contents => { output.push(contents); })) : output.push(element);
  }
  return output;
};

module.exports = flatten;