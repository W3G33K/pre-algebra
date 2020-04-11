/** @imports **/
const Enumerable = require("/lib/enum/enumerable.class");

class PlaceColumns extends Enumerable {
	static get ONES() {
		return "ones";
	}

	static get TENS() {
		return "tens";
	}

	static get HUNDREDS() {
		return "hundreds";
	}

	static get THOUSANDS() {
		return "thousands";
	}

	static get TEN_THOUSANDS() {
		return "ten-thousands";
	}

	static get HUNDRED_THOUSANDS() {
		return "hundred-thousands";
	}

	static get MILLIONS() {
		return "millions";
	}

	static get TEN_MILLIONS() {
		return "ten-millions";
	}

	static get HUNDRED_MILLIONS() {
		return "hundred-millions";
	}

	static get BILLIONS() {
		return "billions";
	}

	static get TEN_BILLIONS() {
		return "ten-billions";
	}

	static get HUNDRED_BILLIONS() {
		return "hundred-billions";
	}

	static get TRILLIONS() {
		return "trillions";
	}

	static get TEN_TRILLIONS() {
		return "ten-trillions";
	}

	static get HUNDRED_TRILLIONS() {
		return "hundred-trillions";
	}

	static get QUADRILLIONS() {
		return "quadrillions";
	}
}

module.exports = PlaceColumns;
