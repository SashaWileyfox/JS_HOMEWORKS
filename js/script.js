'use strict';

const numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        console.log('you canceled');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}