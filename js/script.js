'use strict';

//HW_9

const type = prompt('Please select the temperature measurement unit (F or C)');
const temp = Number(prompt('Please specify the temperature'));

if(!isNaN(temp)) {
    let result = null;

    if (type.toUpperCase() === 'F'){
        result = 'It will be ' + ((temp - 32) * 5 / 9) + (' degrees Fahrenheit');
    }
    if (type.toUpperCase() === 'C') {
        result = 'It will be ' + ((temp * 5 / 9) + 32) + (' degrees Fahrenheit');
    }
    if (!(type.toUpperCase() !== 'F' && type.toUpperCase() !== 'C')) {
    } else {
        result = 'Wrong temperature! Please enter "C" or "F".';
    }

    alert(result)
} else {
    alert('Invalid temperature. Please enter a valid number.');
}



