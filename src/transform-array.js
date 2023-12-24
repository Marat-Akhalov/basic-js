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

  const arrCopy = [...arr];

  const doubleNext = arrCopy.includes('--double-next') ? '--double-next' : false;
  let indexOfDoubleNext = arrCopy.indexOf(doubleNext);
  const doublePrev = arrCopy.includes('--double-prev') ? '--double-prev' : false;
  let indexOfDoublePrev = arrCopy.indexOf(doublePrev);

  const discardNext = arrCopy.includes('--discard-next') ? '--discard-next' : false;
  let indexOfDiscardNext = arrCopy.indexOf(discardNext);
  const discardPrev = arrCopy.includes('--discard-prev') ? '--discard-prev' : false;
  let indexOfDiscardPrev = arrCopy.indexOf(discardPrev);

  // guard closes for interrupting cases
  if (indexOfDiscardNext + 2 === indexOfDoublePrev) {
    arrCopy.splice(indexOfDoublePrev, 1);
    indexOfDoublePrev = -1;
  }

  if (indexOfDiscardNext + 2 === indexOfDiscardPrev) {
    arrCopy.splice(indexOfDiscardPrev, 1);
    indexOfDiscardPrev = -1;
  }

  // doubleNext

  if (doubleNext && indexOfDoubleNext !== 0) {
    arrCopy[indexOfDoubleNext] = arrCopy[indexOfDoubleNext + 1];
  }

  if (indexOfDoubleNext === arrCopy.length - 1) {
    arrCopy.splice(indexOfDoubleNext, 1);
  }

  // doublePrev

  if (doublePrev && indexOfDoublePrev !== arrCopy.length - 1) {
    arrCopy[indexOfDoublePrev] = arrCopy[indexOfDoublePrev - 1];
  }

  if (indexOfDoublePrev === 0) {
    arrCopy.splice(indexOfDoublePrev, 1);
  }

  // discardNext

  if (discardNext && indexOfDiscardNext !== 0) {
    arrCopy.splice(indexOfDiscardNext, 2);
  }

  if (indexOfDiscardNext === arrCopy.length - 1) {
    arrCopy.splice(indexOfDiscardNext, 1);
  }

  // discardPrev

  if (discardPrev && indexOfDiscardPrev > 0) {
    arrCopy.splice(indexOfDiscardPrev - 1, 2);
  }

  if (indexOfDiscardPrev === 0) {
    arrCopy.splice(indexOfDiscardPrev, 1);
  }

  console.log(arrCopy);

  return arrCopy;
}

module.exports = {
  transform,
};
