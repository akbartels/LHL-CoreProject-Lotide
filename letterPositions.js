
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    // console.log(i, sentence[i], results[sentence[i]], results[i])
    // results[sentence[i]].push(i)
    // console.log(results.h)
    
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        // console.log(sentence[i], "exists")
        results[sentence[i]].push(i);
      } else {
        // console.log(sentence[i], "does not exist")
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;