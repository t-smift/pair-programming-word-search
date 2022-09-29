const reverse = function(string) {
  return string.split("").reverse().join("");
};

const transpose = function(matrix) {
  let newMatrix = [];
  for (let y = 0; y < matrix[0].length; y++) {
    let newArray =[];
    for (x = 0; x < matrix.length; x++) {
      newArray.push(matrix[x][y]);
    }
    newMatrix.push(newArray);
  }
  return newMatrix;
};

const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    console.log("No words to search in this wordsearch!");
    return undefined;
  }
  word = word.toUpperCase();
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverse(word))) return true;
  }
  const verticalJoin = transpose(letters).map(rs => rs.join(''));
  for (r of verticalJoin) {
    if (r.includes(word) || l.includes(reverse(word))) return true;
  }
  return false;
};

module.exports = wordSearch;