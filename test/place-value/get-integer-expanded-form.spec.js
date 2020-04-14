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
	{actual: 301, expected: "three hundred one"}, {actual: 605, expected: "six hundred five"}, {actual: 909, expected: "nine hundred nine"},
	{actual: -109, expected: "negative one hundred nine"}, {actual: -206, expected: "negative two hundred six"}, {actual: -303, expected: "negative three hundred three"},
	{actual: 123, expected: "one hundred twenty three"}, {actual: 321, expected: "three hundred twenty one"}, {actual: 953, expected: "nine hundred fifty three"},
	{actual: -555, expected: "negative five hundred fifty five"}, {actual: -777, expected: "negative seven hundred seventy seven"}, {actual: -333, expected: "negative three hundred thirty three"},
	{actual: 1000, expected: "one thousand"}, {actual: 5000, expected: "five thousand"}, {actual: 9000, expected: "nine thousand"},
	{actual: -7000, expected: "negative seven thousand"}, {actual: -4000, expected: "negative four thousand"}, {actual: -2000, expected: "negative two thousand"},
	{actual: 3001, expected: "three thousand one"}, {actual: 6006, expected: "six thousand six"}, {actual: 9009, expected: "nine thousand nine"},
	{actual: -1001, expected: "negative one thousand one"}, {actual: -5001, expected: "negative five thousand one"}, {actual: -9001, expected: "negative nine thousand one"},
	{actual: 4321, expected: "four thousand three hundred twenty one"}, {actual: 1234, expected: "one thousand two hundred thirty four"}, {actual: 5678, expected: "five thousand six hundred seventy eight"},
	{actual: -9764, expected: "negative nine thousand seven hundred sixty four"}, {actual: -5555, expected: "negative five thousand five hundred fifty five"}, {actual: -3456, expected: "negative three thousand four hundred fifty six"},
	{actual: 50000, expected: "fifty thousand"}
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
