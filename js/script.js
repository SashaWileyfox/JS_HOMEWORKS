'use strict';

// task #1
const str1 = prompt('some text');
const str2 = prompt('some text');
const str3 = prompt('some text');
alert(str1 + ' ' + str2 + ' ' + str3)

// task #2
const number = 12345;
const digits = number.toString().split('').map(Number);
console.log(digits.join(' '));
