const letterPositions = sentence => {
  let sentenceCopy = sentence;
  let results = {};
  for (let i = 0; i < sentenceCopy.length; i++) {
    let uniqueCharProps = Object.keys(results);
    let char = sentenceCopy[i];
    (!uniqueCharProps.includes(char) && results[char] === undefined && char !== " " ? results[char] = [i]
      : (char !== " ") && (results[char].push(i)));
  }
  return results;
};

module.exports = letterPositions;