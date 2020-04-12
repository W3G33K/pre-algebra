/** @imports **/
const Enumerable = require("../enumerable.class");

/** @constants **/
const TYPE_ARRAY = "array";
const TYPE_STRING = "string";

class Types extends Enumerable {
	static get ARRAY() {
		return TYPE_ARRAY;
	}

	static get STRING() {
		return TYPE_STRING;
	}
}

module.exports = Types;
