'use strict';

// const a = prompt('Enter the value a');
//const b = prompt('Enter the value b')

//#1
//Number(a) === 0 ? alert('It is true') : alert('It is false');

//#2 більше
//Number(a) > 0 ? alert('It is true') : alert('It is false');

//#3 менше
//Number(a) < 0 ? alert('It is true') : alert('It is false');

//#4
//Number(a) >= 0 ? alert('It is true') : alert('It is false');

//#5
//Number(a) <= 0 ? alert('It is true') : alert('It is false');

//#6
//Number(a) !== 0 ? alert('It is true') : alert('It is false');

//#7
//a === 'test' ? alert('It is true') : alert('It is false');

//#8
//Number(a) === 1 ? alert('It is true') : alert('It is false');

//#9
//Number(a) > 0 && Number(a) < 5 ? alert('It is true') : alert('It is false');

//#10
//umber(a) === 0 || Number(a) === 2 ? alert(`${Number(a) + 7}`) : alert(`${a / 2}`);

//#11
//Number(a) <= 1 && Number(b) >= 3 ? alert(`${Number(a) + Number(b)}`) : alert(`Difference: ${Number(a) - Number(b)}`);

//#12
//Number(a) > 2 && Number(a) < 11 || Number(b) >= 6 && Number(b) < 14 ? alert('It is true') : alert('It is false');

//#13
const num = Number(prompt('Enter the value'));
let result = null;

switch (true) {
    case num === 1:
        result = 'Winter';
        break;
    case num === 2:
        result = 'Spring';
        break;
    case num === 3:
        result = 'Summer';
        break;
    case num === 4:
        result = 'Autumn';
        break;
    default:
        result = 'false';
}
alert(result);