/** @imports **/
const PlaceColumns = require("../../lib/enum/impl/place-columns.enum");

/** @module-globals */
const places = PlaceColumns.values();

/**
 * Returns the place values of an integer in tabular format. Can be passed directly to console.table method for outputting.
 *
 * @param {number} integer - Any integer limited by a range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 * @returns {object[]} Tabular data containing place values of integer arguments.
 *
 * @throws {TypeError} Argument must be a valid integer.
 * @see {@link console.table} for more information about how an array of tabular data can be displayed.
 */
function displayPlaceValue(integer) {
	if (Number.isSafeInteger(integer) === false) {
		throw new TypeError("Argument must be a valid integer.");
	}

	let absoluteInteger = Math.abs(integer);
	let numberString = `${absoluteInteger}`;
	let numberStringLength = numberString.length;

	let displayTableObject = {};
	for (let placeColumnIndex = numberStringLength; placeColumnIndex > 0; placeColumnIndex--) {
		let placeColumn = places[placeColumnIndex - 1],
			digit = numberString.charAt(numberStringLength - placeColumnIndex);
		displayTableObject[placeColumn] = parseInt(digit);
	}

	return [displayTableObject];
}

module.exports = displayPlaceValue;
