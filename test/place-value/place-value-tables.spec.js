/** @imports */
const chai = require("chai");
const subject = require("../../src/place-value/place-value-tables");

const Types = require("../../lib/enum/impl/types.enum");

/** @module-globals */
const expect = chai.expect;

describe("Place Value Tables", function() {
	it("expects 1 to display only [ones] column", function() {
		let result = subject(1);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([{"ones": 1}]);
	});

	it("expects 253 to display [hundreds, tens, ones] columns", function() {
		let result = subject(253);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([{"hundreds": 2, "tens": 5, "ones": 3}]);
	});

	it("expects 60,229 to display [ten-thousands, thousands, hundreds, tens, ones] columns", function() {
		let result = subject(60229);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([{"ten-thousands": 6, "thousands": 0, "hundreds": 2, "tens": 2, "ones": 9}]);
	});

	it("expects 9,007,199,254,740,991 to display [quadrillions, hundred-trillions, tens-trillions, trillions, hundred-billions, ten-billions, billions, " +
		"hundred-millions, ten-millions, millions, hundred-thousands, ten-thousands, thousands, hundreds, tens, ones] columns", function() {
		let result = subject(9007199254740991);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([
			{
				"quadrillions": 9, "hundred-trillions": 0, "ten-trillions": 0, "trillions": 7, "hundred-billions": 1, "ten-billions": 9, "billions": 9,
				"hundred-millions": 2, "ten-millions": 5, "millions": 4, "hundred-thousands": 7, "ten-thousands": 4, "thousands": 0, "hundreds": 9, "tens": 9, "ones": 1
			}
		]);
	});

	it("expects -1 to display only [ones] column", function() {
		let result = subject(-1);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([{"ones": 1}]);
	});

	it("expects -9,007,199,254,740,991 to display [quadrillions, hundred-trillions, tens-trillions, trillions, hundred-billions, ten-billions, billions, " +
		"hundred-millions, ten-millions, millions, hundred-thousands, ten-thousands, thousands, hundreds, tens, ones] columns", function() {
		let result = subject(-9007199254740991);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.have.deep.members([
			{
				"quadrillions": 9, "hundred-trillions": 0, "ten-trillions": 0, "trillions": 7, "hundred-billions": 1, "ten-billions": 9, "billions": 9,
				"hundred-millions": 2, "ten-millions": 5, "millions": 4, "hundred-thousands": 7, "ten-thousands": 4, "thousands": 0, "hundreds": 9, "tens": 9, "ones": 1
			}
		]);
	});

	/** @edge-cases */
	it("expects passing 'undefined' as integer argument to throws error", function() {
		expect(function() {
			subject(undefined);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'null' as integer argument to throws error", function() {
		expect(function() {
			subject(null);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'NaN' as integer argument to throws error", function() {
		expect(function() {
			subject(NaN);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'empty string' as integer argument to throws error", function() {
		expect(function() {
			subject("");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'blank string' as integer argument to throws error", function() {
		expect(function() {
			subject("   ");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'floating point number' as integer argument to throws error", function() {
		expect(function() {
			subject(222.5);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});
});
