'use strict';
const task = '----------task #'

//task #1
console.log(`${task}1`);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const unite = arr1.concat(arr2);
console.log(unite);

//task #2
console.log(`${task}2`);
const arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3);

//task #3
console.log(`${task}3`);
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//task #4
console.log(`${task}4`);
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6)
console.log(arr5);

//task #5
console.log(`${task}5`);
const arr6 = ['js', 'css', 'jq'];
console.log(arr6.shift());

//task #6
console.log(`${task}6`);
const arr7 = ['js', 'css', 'jq'];
console.log(arr7.pop());

//task #7
console.log(`${task}7`);
const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.slice(0, 3));

//task #8
console.log(`${task}8`);
const arr9 = [1, 2, 3, 4, 5];
console.log(arr9.slice(3));

//task #9
console.log(`${task}9`);
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10)


//task #10
console.log(`${task}10`);
const arr11 = [1, 2, 3, 4, 5];
arr11.shift();
arr11.pop();
console.log(arr11);

//task #11
console.log(`${task}11`);
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0, 'a', 'b', 'c');
console.log(arr12)

//task #12
console.log(`${task}12`);
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(6, 0, 'c');
arr13.splice(8, 0, 'e');
console.log(arr13);

//task #13
console.log(`${task}13`);
const arr14 = [3, 4, 1, 2, 7];
console.log(arr14.sort());

//task #14
console.log(`${task}14`);
const arr15 = [5, 6, 7, 8, 9];
const result = arr15.reduce(function (a, b) {
    return a + b;
})
console.log(result)

//task #15
console.log(`${task}15`);
const arr16 = [5, 6, 7, 8, 9];
const arrSq = arr16.map(function (el) {
    return el ** 2;
})
console.log(arrSq);

//task #16
console.log(`${task}16`);
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const negative = arr17.filter(function (el) {
    return el < 0;
});
console.log(negative);

//task #17
console.log(`${task}17`);
const arr18 = [1, -3, 5, 6, -7, 8, 9, -11];
const positive = arr18.filter(function (el) {
    return el > 0;
})
console.log(positive);

//task #18
console.log(`${task}18`);
const arr19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const more5 = arr19.filter(function (el) {
    return el.length > 5
})
console.log(more5);

//task #19
console.log(`${task}19`);
const arr20 = [1, 2, [3, 4], 5, [6, 7]];
const filtrate = arr20.filter(Array.isArray);
console.log(filtrate);

//task #20
console.log(`${task}20`);
const arr21 = [5, -3, 6, -5, 0, -7, 8, 9];
const sum = arr21.filter(function (el) {
    return el < 0;
})
console.log(sum.length);