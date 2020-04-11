let places = [
	"ones", "tens", "hundreds",
	"thousands", "ten-thousands", "hundred-thousands",
	"millions", "ten-millions", "hundred-millions",
	"billions", "ten-billions", "hundred-billions",
	"trillions", "ten-trillions", "hundred-trillions",
	"quadrillions"
];

/**
 * Returns the place values of a search.
 *
 * @param {number} integer - Any integer limited by a range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 * @param {number} search - Any integer limited by a range of 0 to Number.MAX_SAFE_INTEGER.
 * @returns {string[]} Array containing place values found by ending column to starting column (e.g. ['tens', 'ones']).
 *
 * @throws {TypeError} Argument must be a valid integer.
 */
module.exports = function(integer, search) {
	if (Number.isSafeInteger(integer) === false ||
		(Number.isSafeInteger(search) && search >= 0) === false) {
		throw new TypeError("Argument must be a valid integer.");
	}

	let number = `${integer}`;
	let matcher = new RegExp(`${search}`, "g");
	let positions = [...number.matchAll(matcher)]
		.map(match => (number.length - match.index));
	return positions.map(position => places[position - 1]);
};
