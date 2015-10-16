'use strict';
var arrayUniq = require('array-uniq');
var mathSum = require('math-sum');
var numberIsInteger = require('number-is-integer');
var primefactors = require('quick-primefactors');

module.exports = function (a, b, opts) {
	opts = opts || {};

	if (!numberIsInteger(a) || !numberIsInteger(b)) {
		throw new TypeError('Expected a number');
	}

	if (Math.abs(a - b) !== 1) {
		return false;
	}

	var x = primefactors(a);
	var y = primefactors(b);

	if (opts.distinct) {
		x = arrayUniq(x);
		y = arrayUniq(y);
	}

	return mathSum(x) === mathSum(y);
};
