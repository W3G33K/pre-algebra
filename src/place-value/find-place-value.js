/** @imports **/
const PlaceColumns = require("../../lib/enum/impl/place-columns.enum");

/** @module-globals */
const places = PlaceColumns.values();

/**
 * Returns the place values of a search.
 *
 * @param {number} integer - Any integer limited by a range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 * @param {number} search - Any integer limited by a range of 0 to Number.MAX_SAFE_INTEGER.
 * @returns {string[]} Array containing place values found by ending column to starting column (e.g. ['tens', 'ones']).
 *
 * @throws {TypeError} Argument must be a valid integer.
 */
function findPlaceValue(integer, search) {
	if (Number.isSafeInteger(integer) === false ||
		(Number.isSafeInteger(search) && search >= 0) === false) {
		throw new TypeError("Argument must be a valid integer.");
	}

	let matcher = `${search}`,
		number = `${integer}`;
	let length = number.length;

	let positions = [];
	let offset = number.indexOf(matcher); // 0
	while (offset !== -1) {
		positions.push(length - offset);
		offset = number.indexOf(matcher, (offset + 1));
	}

	return positions.map(position => places[position - 1]);
}

module.exports = findPlaceValue;
