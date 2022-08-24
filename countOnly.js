const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`) : console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);