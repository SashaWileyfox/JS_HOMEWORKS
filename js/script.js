'use strict';
const task = '----------task #'

//task #1
console.log(`${task}1`)
let arr = [];
for (let a = 20; a <= 30; a += 0.5) {
    arr.push(a);
}
console.log(arr.join(' '));

//task #2
console.log(`${task}2`)
for (let a = 10; a <= 100; a += 10) {
    console.log(`${a}$ * ${27}UAH = ${a * 27}`);
}

//task #3
console.log(`${task}3`)
let number = +prompt('Please enter the number');
let arr1 = [];

for (let a = 1; a <= 100; a++) {
    if (a * a <= number) arr1.push(a);
}
console.log(arr1.join(', '))

//task #4
console.log(`${task}4`)
const number1 = +prompt('Please enter the number');
let arr2 = [];

for (let a = 1; a <= number1; a++) {
    if (number1 % a === 0) arr2.push(a)
}

arr2.length === 2 ? console.log(number1 + ' is a prime number') : console.log(number1 + " is not a prime number");

console.log(arr2.join(', '))

//task #5
console.log(`${task}5`)
const number2 = +prompt('Please enter the number');
for (let a = 1; a <= number2; a++) {
    if (number2 === 3 ** a) {
        console.log(`${number2} = ${a}**3`)
    } else {
        console.log(number + 'your number cannot be derived from power 3')
    }
}

