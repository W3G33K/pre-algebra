/** @module-globals */
const lower = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function expand(integer, base) {
	if (base > 1) {
		return "ten";
	}

	return (integer >= 0) ? lower[integer - 1] : "negative " + lower[~integer];
}

/**
 * Returns the expanded form of an integer (e.g. 1,234 would yield one thousand two hundred thirty four).
 *
 * @param {number} integer - Any integer limited by a range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 * @returns {string} Expanded form of an of the given integer.
 *
 * @throws {TypeError} Argument must be a valid integer.
 */
function getIntegerExpandedForm(integer) {
	if (integer === 0) {
		return "zero";
	}

	return expand(integer, (integer > 9) ? 2 : 1);
}

module.exports = getIntegerExpandedForm;
