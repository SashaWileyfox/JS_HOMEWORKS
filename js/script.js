'use strict';

// task #1
let str1 = prompt('some text');
let str2 = prompt('some text');
let str3 = prompt('some text');
alert(str1 + ' ' + str2 + ' ' + str3)

// task #2
let number = 12345;
let digits = number.toString().split('').map(Number);
console.log(digits.join(' '));
