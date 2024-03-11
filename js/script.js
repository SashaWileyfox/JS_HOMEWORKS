'use strict';

const number = +prompt('please enter the number')


// Option #1

switch (true) {
    case isNaN(+number):
        alert('ви ввели не корректне число');
        break;
    case number % 10 === 1 && number % 100 !== 11:
        alert(`${number} рік`);
        break;
    case number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20):
        alert(`${number} роки`);
        break;
    default:
        alert(`${number} років`)
}

// Option #2
/*
if (!isNaN(number)) {

    if (number % 10 === 1 && number % 100 !== 11) {
        alert(`${number} рік`);
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        alert(`${number} роки`);
    } else {
        alert(`${number} років`);
    }
} else {
    alert('ви ввели не корректне число');
}
*/