const countLetters = (sentence) => {
  let sentenceNoSpace = sentence.split(" ").join("");
  let results = {};
  for (let char of sentenceNoSpace) {
    let uniqueCharProps = Object.keys(results);
    (!uniqueCharProps.includes(char)) && results[char] === undefined ? results[char] = 1
      : results[char] ++;
  }
  return results;
};

module.exports = countLetters;