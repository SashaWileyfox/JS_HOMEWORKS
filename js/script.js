'use strict';
const padString = function (string, length, symbol = '*', right = true) {
    if (typeof string !== 'string') return 'Error you need to enter string';
    if (typeof length !== 'number' || length < 0) return 'Error you need to enter number';
    if (typeof symbol !== 'string' || symbol.length !== 1) return 'Error you need to enter 1 symbol';
    if (typeof right !== 'boolean') return 'Error you need to enter boolean value';

    if (string.length > length) return string.substring(0, length);

    while (string.length < length) {
        right ? string = string + symbol : string = symbol + string;
    }
    return string;
}
console.log(padString('hello', 8));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));

