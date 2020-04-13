/** @imports */
const chai = require("chai");
const subject = require("../../src/place-value/get-integer-expanded-form");

const Types = require("../../lib/enum/impl/types.enum");

/** @module-globals */
const expect = chai.expect;

const parameterizedTests = [
	{actual: -1, expected: "negative one"}, {actual: -2, expected: "negative two"}, {actual: -3, expected: "negative three"},
	{actual: -4, expected: "negative four"}, {actual: -5, expected: "negative five"}, {actual: -6, expected: "negative six"},
	{actual: -7, expected: "negative seven"}, {actual: -8, expected: "negative eight"}, {actual: -9, expected: "negative nine"},
	{actual: 0, expected: "zero"}, {actual: 1, expected: "one"}, {actual: 2, expected: "two"},
	{actual: 3, expected: "three"}, {actual: 4, expected: "four"}, {actual: 5, expected: "five"},
	{actual: 6, expected: "six"}, {actual: 7, expected: "seven"}, {actual: 8, expected: "eight"},
	{actual: 9, expected: "nine"}, {actual: 10, expected: "ten"}, {actual: 15, expected: "fifteen"},
	{actual: -13, expected: "negative thirteen"}, {actual: -16, expected: "negative sixteen"}, {actual: -18, expected: "negative eighteen"},
	{actual: 20, expected: "twenty"}, {actual: 90, expected: "ninety"}, {actual: 50, expected: "fifty"},
	{actual: -30, expected: "negative thirty"}, {actual: -40, expected: "negative forty"}, {actual: -70, expected: "negative seventy"},
	{actual: 21, expected: "twenty one"}, {actual: 33, expected: "thirty three"}, {actual: 45, expected: "forty five"},
	{actual: -57, expected: "negative fifty seven"}, {actual: -69, expected: "negative sixty nine"}, {actual: -72, expected: "negative seventy two"},
	{actual: 100, expected: "one hundred"}, {actual: 500, expected: "five hundred"}, {actual: 900, expected: "nine hundred"},
	{actual: -200, expected: "negative two hundred"}, {actual: -400, expected: "negative four hundred"}, {actual: -600, expected: "negative six hundred"},
	{actual: 301, expected: "three hundred one"}
];

describe("Get Integer Expanded Form", function() {
	parameterizedTests.forEach(function(test) {
		it(`expects ${test.actual} to be '${test.expected}' in expanded form`, function () {
			let result = subject(test.actual);
			expect(result).to.be.a(Types.STRING);
			expect(result).to.eq(test.expected);
		});
	});
});
