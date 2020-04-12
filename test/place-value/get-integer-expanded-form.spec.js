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
	{actual: 9, expected: "nine"}
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
