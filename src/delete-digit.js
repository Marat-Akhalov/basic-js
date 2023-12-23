const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nums = n.toString().split('');

  let temp = '';
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = '';
    for (let k = 0; k < nums.length; k++) {
      if (i === k) {
        console.log(i, k);
        console.log('do nothing');
        continue;
      }
      temp += nums[k];
    }
    maxValue = Math.max(maxValue, parseInt(temp));
  }

  return maxValue;
}

module.exports = {
  deleteDigit,
};
