const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = s1.split('');
  const chars2 = s2.split('');

  let count = 0;

  chars1.forEach(char => {
    console.log(chars2.length);
    if (chars2.includes(char)) {
      count += 1;
      chars2.splice(chars2.indexOf(char), 1);
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
