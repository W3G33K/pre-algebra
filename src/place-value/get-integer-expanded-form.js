/** @module-globals */
const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

/**
 * Returns the expanded form of an integer (e.g. 1,234 would yield one thousand two hundred thirty four).
 *
 * @param {number} integer - Any integer limited by a range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 * @returns {string} Expanded form of an of the given integer.
 *
 * @throws {TypeError} Argument must be a valid integer.
 */
function getIntegerExpandedForm(integer) {
	return (integer >= 0) ? digits[integer] : "negative " + digits[~integer + 1];
}

module.exports = getIntegerExpandedForm;
