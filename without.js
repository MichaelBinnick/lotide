const without = (source, itemsToRemove) => {
  let output = [];
  for (let sourceItem of source) {
    let toRemove = false;
    for (let removalItem of itemsToRemove) {
      (sourceItem === removalItem) && (toRemove = true);
    }
    (toRemove === false) && (output.push(sourceItem));
  }
  return output;
};

module.exports = without;