'use strict';
let sum = 0;
outer: for (let a = 1; a <= 20; a++) {
    if (a % 2 === 0) continue outer;
    console.log(a)
    sum += a;
}
console.log('Sum:' + sum)