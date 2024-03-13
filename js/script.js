'use strict';
const task = '-----------------task #'

//task #1
let arr = [];
for (let a = 10; a <= 20; a++) {
    arr.push(a);
}
console.log(`${task}1\n ${arr.join(', ')}`);

//task #2
let arr1 = [];
for (let a = 10; a <= 20; a++) {
    arr1.push(a * a);
}
console.log(`${task}2 \n${arr1.join(', ')}`);

//task #3
console.log(`${task}3`);
for (let mult = 1; mult <= 10; mult++) {
    console.log(`${mult} * ${mult} = ${mult * 7}`)
}

//task #4
console.log(`${task}4`);
let sum = 0;
for (let a = 1; a <= 15; a++) {
    sum += a
}
console.log(sum);

//task #5
console.log(`${task}5`);
let arr2 = [];
for (let a = 15; a <= 35; a++) {
    arr2.push(`${a * a}`);
}
console.log(arr2.join(', '));

//task #6
console.log(`${task}6`);
let sum2 = 0;
for (let a = 1; a <= 500; a++) {
    sum2 += a;
}
console.log(sum2 / 500);

//task #7
console.log(`${task}7`);
let arr3 = [];
for (let a = 30; a <= 80; a++) {
    if (a % 2 === 0) arr3.push(a);
}
console.log(arr3.join(', '));

//task #8
console.log(`${task}8`);
let arr4 = [];
for (let a = 100; a <= 200; a++) {
    if (a % 3 === 0) arr4.push(a);
}
console.log(arr4.join(', '));

//task #9 #10 #11
console.log(`${task}9 #10 #11`);

const number = prompt('enter a natural number');

let arr5 = [];
let countMult = 0;
let sumMult = 0;

for (let a = 1; a <= number; a++) {
    if (number % a === 0) arr5.push(a);
    if (number % a === 0) sumMult += a;
    countMult += number % a === 0;
}
console.log(`${arr5.join(', ')} \n Кількість парних дільників: ${countMult} \n Сума парних дільників: ${sumMult}`);

//task #12
console.log(`${task}12`);

for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} * ${b} = ${a * b}`);
    }
}
