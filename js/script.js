'use strict';

const operation = prompt('Please select the operation (add, sub, mult, div):');
const num1 = Number(prompt('Please enter the first number'));
const num2 = Number(prompt('Please enter the second number'));
let symbols = new Map([
    ['add', '+'],
    ['div', '/'],
    ['mult', '*'],
    ['sub', '-']
]);
const symbol = symbols.get(operation);
let result = null;

if (isNaN(num1)) {
    alert('Invalid first number. Please enter a valid number.');
} else {
    if (isNaN(num2)) {
        alert('Invalid second number. Please enter a valid number.');
    } else {
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'sub') {
            result = num1 - num2;
        } else if (operation === 'mult') {
            result = num1 * num2;
        } else if (operation === 'div') {
            result = num1 / num2;
        }
    }
}
alert(`${num1} ${symbol} ${num2} = ${result}`);


