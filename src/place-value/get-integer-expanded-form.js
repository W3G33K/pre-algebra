/** @module-globals */
const ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function expand(integer, base) {
	if (integer >= 20) {
		return tens[(integer / 10) - 2];
	} else {
		return ones[integer - 1];
	}
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

	let number = integer,
		sign = "";
	if (number < 0) {
		number = number * -1;
		sign = "negative ";
	}

	return sign + expand(number, (number > 9) ? 2 : 1);
}

module.exports = getIntegerExpandedForm;
