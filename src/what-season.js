const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  const indexOfSeason = Math.floor(((date.getMonth() + 1) / 12) * 4) % 4;

  return seasons[indexOfSeason];
}

module.exports = {
  getSeason,
};
