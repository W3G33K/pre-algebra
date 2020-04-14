/** @module-globals */
const ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const groups = ["hundred", "thousand"];

function base10(number) {
	return Math.floor(Math.log10(number));
}

function expand(integer, base) {
	let remainder = 0;

	let result;
	if (integer >= 100) {
		let scale;
		if (base > 3) {
			base = 3;
			scale = Math.pow(10, 3);
		} else {
			scale = Math.pow(10, base);
		}

		let quotient = Math.floor(integer / scale);
		remainder = integer - (quotient * scale);
		result = expand(quotient, base - 1) + " " + groups[base - 2];
	} else if (integer >= 20) {
		let quotient = Math.floor(integer / 10);
		remainder = integer - (quotient * 10);
		result = tens[quotient - 2];
	} else {
		result = ones[integer - 1];
	}

	if (remainder > 0) {
		result = result + " " + expand(remainder, base - 1);
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

	return sign + expand(number, base10(number));
}

module.exports = getIntegerExpandedForm;
