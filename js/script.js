'use strict';

const num1 = Number(prompt('Please enter the first digit:'));
const num2 = Number(prompt('Please enter the second digit:'));
const num3 = Number(prompt('Please enter the third digit:'));

const sum = `${(num1 + num2 + num3) / 3}`;

alert(`result: (${num1} + ${num2} + ${num3}) / 3 = ${sum}`);