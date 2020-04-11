/** @imports */
const chai = require("chai");
const subject = require("/src/place-value");

const Types = require("/lib/enum/impl/types.enum");

/** @globals */
const expect = chai.expect;

describe("Finding Place Value", function() {
	it("expects to find 0's place value in 907 at [tens] position", function() {
		let result = subject.findPlaceValue(907,0);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("tens");
	});

	it("expects to find 6's place value in 4,356 at [ones] position", function() {
		let result = subject.findPlaceValue(4356,6);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("ones");
	});

	it("expects to find 5's place value in 4,356 at [tens] position", function() {
		let result = subject.findPlaceValue(4356,5);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("tens");
	});

	it("expects to find 3's place value in 4,356 at [hundreds] position", function() {
		let result = subject.findPlaceValue(4356,3);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("hundreds");
	});

	it("expects to find 4's place value in 4,356 at [thousands] position", function() {
		let result = subject.findPlaceValue(4356,4);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("thousands");
	});

	it("expects to find 4356's place value in 4,356 at [thousands] position", function() {
		let result = subject.findPlaceValue(4356,4356);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("thousands");
	});

	it("expects to find 4356's place value in -4,356 at [thousands] position", function() {
		let result = subject.findPlaceValue(-4356,4356);
		expect(result).to.be.an(Types.ARRAY).of.length(1);
		expect(result).to.include("thousands");
	});

	it("does not expect to find 8's place value in 4,356", function() {
		let result = subject.findPlaceValue(4356, 8);
		expect(result).to.be.an(Types.ARRAY).of.length(0);
	});

	it("does not expect to find 8's place value in -4,356", function() {
		let result = subject.findPlaceValue(-4356, 8);
		expect(result).to.be.an(Types.ARRAY).of.length(0);
	});

	it("expects to find ambiguous 9's place value in 987,659,391 at [hundred-millions, thousands, tens] position", function() {
		let result = subject.findPlaceValue(987659391,9);
		expect(result).to.be.an(Types.ARRAY).of.length(3);
		expect(result).to.include.ordered.members(
			["hundred-millions", "thousands", "tens"]);
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
		let result = subject.findPlaceValue(9007199254740991,9);
		expect(result).to.be.an(Types.ARRAY).of.length(5);
		expect(result).to.include.ordered.members(
			["quadrillions", "ten-billions", "billions", "hundreds", "tens"]);
	});

	it("expects to find ambiguous 9's place value in -9,007,199,254,740,991 at [quadrillions, ten-billions, billions, hundreds, tens] position", function() {
		let result = subject.findPlaceValue(-9007199254740991,9);
		expect(result).to.be.an(Types.ARRAY).of.length(5);
		expect(result).to.include.ordered.members(
			["quadrillions", "ten-billions", "billions", "hundreds", "tens"]);
	});
});
