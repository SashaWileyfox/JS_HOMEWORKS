'use strict';

const number = +prompt('Please enter the number');
const degree = +prompt('Please enter the degree');

const foo = function (number, degree = 1) {
    if (!Number(number)) return 'Error';


    let result = '';
    result += `${number} ** ${degree} = ${number ** degree}`;

    return result;
}
alert(foo(number, degree))