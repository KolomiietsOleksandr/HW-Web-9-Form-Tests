const chai = require('chai');
const expect = chai.expect;

const { getFactorial, multiply } = require('./Scripts/JsFotTest');

describe('Factorial Function', function () {
    it('should return 1 when the input is 0', function () {
        expect(getFactorial(0)).to.equal(1);
    });

    it('should return "not a valid input" when the input is a negative number', function () {
        expect(getFactorial(-5)).to.equal('not a valid input');
    });

    it('should return the correct factorial value', function () {
        expect(getFactorial(5)).to.equal(120);
    });

    it('should return "not a number" when the input is not a number', function () {
        expect(getFactorial('abc')).to.equal('not a number');
    });
});

describe('Multiply Function', function () {

    it('should return the correct result for multiple values', function () {
        expect(multiply(2)(3)(10).toString()).to.equal('60');
        expect(multiply(-1)(677)(568)(2).toString()).to.equal('-769072');
    });

    it('should return the input value for an empty function call', function () {
        expect(multiply(3).toString()).to.equal('3');
    });
});
