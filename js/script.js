'use strict';
const task = '----------task #'

//task #1
console.log(`${task}1`)

const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let a = 0; a < arr.length; a++) {
    sum += arr[a];
}
console.log(sum)

//task #2
console.log(`${task}2`)

const arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let a = 0; a < arr1.length; a++){
    sum1 += arr1[a] **2;
}
console.log(sum1)
