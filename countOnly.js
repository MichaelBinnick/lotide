// takes in a list(array) of items and rules(true or false for which items to count)
// returns an equal with counts for each item that was asked for
const countOnly = (list, rules) => {
  const output = {};
  const ruleList = [];
  const ruleLabels = Object.keys(rules);
  for (let rule of ruleLabels) {
    (rules[rule] === true) && (ruleList.push(rule));
  }
  console.log(ruleList);
  for (let item of list) {
    
    (ruleList.includes(item)) && (output[item] === undefined ? (output[item] = 1)
      : (output[item] ++));
  }
  return output;
};

module.exports = countOnly;