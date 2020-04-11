/** @imports **/
const Enumerable = require("../enumerable.class");

/** @constants **/
const TYPE_ARRAY = "array";

class Types extends Enumerable {
	static get ARRAY() {
		return TYPE_ARRAY;
	}
}

module.exports = Types;
