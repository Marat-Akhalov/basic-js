const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let optimizedStr = str.split(' ').join('');

  let tempStr = '';
  let additionTemp = '';

  let { repeatTimes } = options;
  let { separator = '+' } = options;
  let { addition = '' } = options;
  let { additionRepeatTimes = 0 } = options;
  let { additionSeparator = '' } = options;

  if (!!addition && !repeatTimes) {
    repeatTimes = 1;
    additionRepeatTimes = 1;
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionTemp += `${addition} `;
  }
  const finalAddition = additionTemp.trim().split(' ').join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    tempStr += `${optimizedStr}${finalAddition} `;
  }

  const resultString = tempStr.trim().split(' ').join(separator);
  return resultString;
}

module.exports = {
  repeater,
};
