const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'K', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'I', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'N', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ELAINE')

    assert.isTrue(result);
  });
  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'I', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'G', 'R', 'O', 'E', 'G', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'GEORGE')

    assert.isTrue(result);
  });
  it("should return undefined if handed an empty array", function() {
    const result = wordSearch([], "GEORGE")
    assert.equal(result, undefined);
  });
});