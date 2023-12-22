const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let count = 0;

  let resultStr = '';

  str += ' ';

  for (let k = 1; k < str.length; k++) {
    if (str[k] === str[i] && k === str.length - 1) {
      resultStr += `${count + 2 || ''}${str[i]}`;
    } else if (str[k] === str[i]) {
      console.log(str[i]);
      count++;
      console.log(count);
    } else {
      resultStr += `${count ? count + 1 : ''}${str[i]}`;
      console.log(str[i]);
      i = k;
      count = 0;
    }
  }

  return resultStr.trim();
}

module.exports = {
  encodeLine,
};
