/** @imports */
const chai = require("chai");

const subject = require("/src/place-value");

/** @globals */
const expect = chai.expect;

describe("Finding Place Value", function() {
	it("expects to find 6's place value in 4,356 at [ones] position", function() {
		let expected = "ones";
		let actual = subject.findPlaceValue(4356,6);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("expects to find 5's place value in 4,356 at [tens] position", function() {
		let expected = "tens";
		let actual = subject.findPlaceValue(4356,5);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("expects to find 3's place value in 4,356 at [hundreds] position", function() {
		let expected = "hundreds";
		let actual = subject.findPlaceValue(4356,3);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("expects to find 4's place value in 4,356 at [thousands] position", function() {
		let expected = "thousands";
		let actual = subject.findPlaceValue(4356,4);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("expects to find 4356's place value in 4,356 at [thousands] position", function() {
		let expected = "thousands";
		let actual = subject.findPlaceValue(4356,4356);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("expects to find 4356's place value in -4,356 at [thousands] position", function() {
		let expected = "thousands";
		let actual = subject.findPlaceValue(-4356,4356);
		expect(actual).to.be.an("array").of.length(1);
		expect(actual).to.include(expected);
	});

	it("does not expect to find 8's place value in 4,356", function() {
		let actual = subject.findPlaceValue(4356, 8);
		expect(actual).to.be.an("array").of.length(0);
	});

	it("does not expect to find 8's place value in -4,356", function() {
		let actual = subject.findPlaceValue(-4356, 8);
		expect(actual).to.be.an("array").of.length(0);
	});

	it("expects to find ambiguous 9's place value in 987,659,391 at [hundred-millions, thousands, tens] position", function() {
		let expected = ["hundred-millions", "thousands", "tens"];
		let actual = subject.findPlaceValue(987659391,9);
		expect(actual).to.be.an("array").of.length(3);
		expect(actual).to.include.ordered.members(expected);
	});

	/** @edge-cases */
	it("expects passing 'undefined' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(undefined);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'null' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(null);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'NaN' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(NaN);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'empty string' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue("");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'blank string' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue("   ");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'floating point number' as integer argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(222.5);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'undefined' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(0, undefined);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'null' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(0, null);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'NaN' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(0, NaN);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'empty string' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(0, "");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'blank string' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(0, "   ");
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'floating point' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(222.5, 5);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects passing 'negative number' as search argument to throws error", function() {
		expect(function() {
			subject.findPlaceValue(15330, -5);
		}).to.throw(TypeError, /^Argument must be a valid integer.$/);
	});

	it("expects to find ambiguous 9's place value in 9,007,199,254,740,991 at [quadrillions, ten-billions, billions, hundreds, tens] position", function() {
		let expected = ["quadrillions", "ten-billions", "billions", "hundreds", "tens"];
		let actual = subject.findPlaceValue(9007199254740991,9);
		expect(actual).to.be.an("array").of.length(5);
		expect(actual).to.include.ordered.members(expected);
	});

	it("expects to find ambiguous 9's place value in -9,007,199,254,740,991 at [quadrillions, ten-billions, billions, hundreds, tens] position", function() {
		let expected = ["quadrillions", "ten-billions", "billions", "hundreds", "tens"];
		let actual = subject.findPlaceValue(-9007199254740991,9);
		expect(actual).to.be.an("array").of.length(5);
		expect(actual).to.include.ordered.members(expected);
	});
});
