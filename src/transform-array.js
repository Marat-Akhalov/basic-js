const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const doubleNext = arr.includes('--double-next') ? '--double-next' : false;
  let indexOfDoubleNext = arr.indexOf(doubleNext);
  const doublePrev = arr.includes('--double-prev') ? '--double-prev' : false;
  let indexOfDoublePrev = arr.indexOf(doublePrev);

  const discardNext = arr.includes('--discard-next') ? '--discard-next' : false;
  let indexOfDiscardNext = arr.indexOf(discardNext);
  const discardPrev = arr.includes('--discard-prev') ? '--discard-prev' : false;
  let indexOfDiscardPrev = arr.indexOf(discardPrev);

  // guard closes for interrupting cases
  if (indexOfDiscardNext + 2 === indexOfDoublePrev) {
    arr.splice(indexOfDoublePrev, 1);
    indexOfDoublePrev = -1;
  }

  if (indexOfDiscardNext + 2 === indexOfDiscardPrev) {
    arr.splice(indexOfDiscardPrev, 1);
    indexOfDiscardPrev = -1;
  }

  // doubleNext

  if (doubleNext && indexOfDoubleNext !== 0) {
    arr[indexOfDoubleNext] = arr[indexOfDoubleNext + 1];
  }

  if (indexOfDoubleNext === arr.length - 1) {
    arr.splice(indexOfDoubleNext, 1);
  }

  // doublePrev

  if (doublePrev && indexOfDoublePrev !== arr.length - 1) {
    arr[indexOfDoublePrev] = arr[indexOfDoublePrev - 1];
  }

  if (indexOfDoublePrev === 0) {
    arr.splice(indexOfDoublePrev, 1);
  }

  // discardNext

  if (discardNext && indexOfDiscardNext !== 0) {
    arr.splice(indexOfDiscardNext, 2);
  }

  if (indexOfDiscardNext === arr.length - 1) {
    arr.splice(indexOfDiscardNext, 1);
  }

  // discardPrev

  if (discardPrev && indexOfDiscardPrev > 0) {
    arr.splice(indexOfDiscardPrev - 1, 2);
  }

  if (indexOfDiscardPrev === 0) {
    arr.splice(indexOfDiscardPrev, 1);
  }

  return arr;
}

module.exports = {
  transform,
};
