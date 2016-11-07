'use strict';

var Calculator = require('../../scripts/calculator.js').Calculator;

describe('Calculator should return: ', function () {
    it('the result of add:', function () {
        var value = Calculator(2).add(2).value();
        expect(value).toBe(4);
    });

    it('The result of subtract:', function () {
        var value = Calculator(4).subtract(3).value();
        expect(value).toBe(1);
    });
});
