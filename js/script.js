'use strict';
const task = '----------task #'

//task #1
console.log(`${task}1`);
const arr = ['a', 'b', 'c', 'd']
const str1 = arr.slice(0, 2).join(' + ');
const str2 = arr.slice(2, 4).join(' + ');
console.log(`${str1} \n${str2}`);

//task #2
console.log(`${task}2`);
const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
/*const result = arr2.reduce(function (acc, val, i, arr) {
    return arr2[0] * arr2[1] + arr2[2] * arr2[3];
})*/
console.log(result);


//task #3
console.log(`${task}3`);
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let num4;
arr3.forEach(function (subarrey) {
    subarrey.forEach(function (el) {
        if (el === 4) num4 = el;
    })
})
console.log(num4);

//task #4
console.log(`${task}4`);
const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
const element = obj.js.find(function (el) {
    return el === 'jQuery'
})
console.log(element);

//task #5
console.log(`${task}5`);
const arr4 = [];
for (let i = 1; i <= 9; i++) {
    arr4.push('x'.repeat(i));
}
console.log(arr4);

//task #6
console.log(`${task}6`);
const arr5 = [];
for (let i = 1; i <= 9; i++) {
    arr5.push(String(i).repeat(i))
}
console.log(arr5);

//task #7
console.log(`${task}7`);
const arr7 = [];
const arrayFill = function (value, lenght) {
    arr7.length = lenght;
    return arr7.fill(value);
}
/*const arrayFill = function (value, end) {
    const arr = [];
    for (let i = 0; i < end; i++){
        arr.push(value);
    }
    return arr;
}*/
console.log(arrayFill('7', 5));

//task #8
console.log(`${task}8`);
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
