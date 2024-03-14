'use strict';

const number = +prompt('Please enter the number');
if (number <= 1) {
    console.log(NaN)
} else {
    let div = 2;

    while (number % div !== 0) {
        div++
    }
    console.log(div)
}

