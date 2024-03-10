'use strict';

const number = +prompt('please enter the number')


// Option #1
switch (true) {
    case isNaN(+number):
        alert('ви ввели не корректне число');
        break;
    case number === 1:
        alert(`${number} рік`);
        break;
    case number === 2:
    case number === 3:
    case number === 4:
        alert(`${number} роки`);
        break;
    default:
        alert(`${number} років`)
}

// Option #2
/*if (!isNaN(number)) {
    if (number === 1) {
        alert(`${number} рік`);
    } else if (number >= 2 && number <= 4) {
        alert(`${number} роки`);
    } else if (number >= 5) {
        alert(`${number} років`);
    } else if (number === 0) {
        alert(`${number} років`);
    } else {
        alert('ви ввели не корректне число');
    }
} else {
    alert('ви ввели не корректне число');
}*/