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

	it("expects 2 to be 'two' in expanded form", function() {
		let result = subject(2);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("two");
	});

	it("expects 3 to be 'three' in expanded form", function() {
		let result = subject(3);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("three");
	});

	it("expects 4 to be 'four' in expanded form", function() {
		let result = subject(4);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("four");
	});

	it("expects 5 to be 'five' in expanded form", function() {
		let result = subject(5);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("five");
	});

	it("expects 6 to be 'six' in expanded form", function() {
		let result = subject(6);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("six");
	});

	it("expects 7 to be 'seven' in expanded form", function() {
		let result = subject(7);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("seven");
	});

	it("expects 8 to be 'eight' in expanded form", function() {
		let result = subject(8);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("eight");
	});

	it("expects 9 to be 'nine' in expanded form", function() {
		let result = subject(9);
		expect(result).to.be.a(Types.STRING);
		expect(result).to.eq("nine");
	});
});
