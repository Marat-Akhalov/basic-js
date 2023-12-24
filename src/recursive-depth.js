const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1;

    for (let val of arr) {
      if (Array.isArray(val)) {
        const nestDepthOfArr = this.calculateDepth(val) + 1;
        arrDepth = Math.max(arrDepth, nestDepthOfArr);
      }
    }

    return arrDepth;
  }
}

module.exports = {
  DepthCalculator,
};
