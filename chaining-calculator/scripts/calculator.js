'use strict';

var Calculator = (function(root){

    return function(n) {
        var total = n || 0;

        return {
            add: function (n) {
                if (typeof n !== 'number') {
                    throw new Error('The argument must be a number!');
                }
                total += n;
                return this;
            },

            subtract: function (n) {
                if (typeof n !== 'number') {
                    throw new Error('The argument must be a number!');
                }
                total -= n;
                return this;
            },

            multiple: function (n) {
                if (typeof n !== 'number') {
                    throw new Error('The argument must be a number!');
                }
                total *= n;
                return this;
            },

            divide: function (n) {
                if (typeof n !== 'number') {
                    throw new Error('The argument must be a number!');
                }
                total /= n;
                return this;
            },

            value: function () {
                return total;
            }
        }
    };
}(this));

