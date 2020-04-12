/** @imports */
const chai = require("chai");
const subject = require("../../src/place-value/get-integer-expanded-form");

const Types = require("../../lib/enum/impl/types.enum");

/** @module-globals */
const expect = chai.expect;

describe("Get Integer Expanded Form", function() {
	it("expects 1 to be 'one' in expanded form", function() {
		let result = subject(1);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("one");
	});
});
