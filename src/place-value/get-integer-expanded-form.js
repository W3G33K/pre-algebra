/** @module-globals */
const ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const groups = ["hundred"];

function expand(integer, base) {
	let result = "";
	if (integer >= 100) {
		let quotient = Math.floor(integer / 100),
			remainder = integer - (quotient * 100);
		result = expand(1, base) + " " + groups[quotient - 1];
	} else if (integer >= 20) {
		let quotient = Math.floor(integer / 10),
			remainder = integer - (quotient * 10);
		result = tens[quotient - 2];
		if (remainder > 0) {
			result = result + " " + expand(remainder, base);
		}
	} else {
		result = ones[integer - 1];
	}

	return result;
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
