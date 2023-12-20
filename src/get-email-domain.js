const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailChars = email.split('');
  const lastAtIndex = emailChars.lastIndexOf('@');

  return emailChars.slice(lastAtIndex + 1).join('');
}

module.exports = {
  getEmailDomain,
};
