/** @imports */
const chai = require("chai");

/** @module-globals */
const expect = chai.expect;

describe("Behavior Driven Design Spec", function() {
	it("true is true", function() {
		expect(true, "abs(boolshit)").to.be.true;
	});
});
