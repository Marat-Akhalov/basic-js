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
  // const nums = String(n).split('');

  // let minNum = nums[0];

  // for (let i = 0; i < nums.length; i++) {
  //   if (parseInt(minNum) > parseInt(nums[i])) {
  //     minNum = nums[i];
  //   }
  // }

  // const minNumIndex = nums.indexOf(minNum);

  // nums.splice(minNumIndex, 1);
  // return parseInt(nums.join(''));
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit,
};
