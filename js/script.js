'use strict';

// task #1

const x = prompt('Введіть перше число');
const y = prompt('Введіть друге число');

x > y ? alert('x більше за y') : alert('x не більше, ніж y');



// task #2

// option #1

const num = prompt('Введіть ціле число');
const countLetter = num.length;
switch (true) {
    case num < 0:
        alert(`Число ${num} ${countLetter - 1}-значним негативним!`);
        break;
    case num > 0:
        alert(`Число ${num} ${countLetter}-значним позитивним!`);
        break;
    default:
        alert(`Введений рядок - не корректний`);
}

// option #2
if (Number(num)) {
    if (num < 0) {
        alert(`Число ${num} ${countLetter - 1}-значним негативним!`);
    } else if (num > 0) {
        alert(`Число ${num} ${countLetter}-значним позитивним!`);
    }
} else {
    alert('Введено некоректне число')
}


//task #3

const num1 = Number(prompt('Введіть перше число'));
const num2 = Number(prompt('Введіть друге число'));
const num3 = Number(prompt('Введіть третє число'));
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    if (num1 > num2 && num1 > num3) {
        alert(`Число ${num1} є максимальим значенням`);
    } else if (num2 > num1 && num2 > num3) {
        alert(`Число ${num2} є максимальим значенням`);
    } else if (num3 > num1 && num3 > num2) {
        alert(`Число ${num3} є максимальим значенням`);
    } else if (num1 === 0 && num2 === 0 && num3 === 0) {
        alert('Ви не ввели жодне значення')
    } else {
        alert(`Всі числа рівні`);
    }
} else {
    alert(`Введений рядок - не корректний`);
}


// task #4
const a = Number(prompt('Введіть довжину першої сторони'));
const b = Number(prompt('Введіть довжину другої сторони'));
const c = Number(prompt('Введіть довжину третьої сторони'));

if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
    if (a + b > c) {
        alert(`Числа сторін \n a: ${a} \n b: ${b} \n в сумі = ${a + b} \n що є  більше значення сторони c: ${c}`);
    } else if (a + c > b) {
        alert(`Числа сторін \n a: ${a} \n c: ${c} \n в сумі = ${a + c} \n що є  більше значення сторони b: ${b}`);
    } else if (b + c > a) {
        alert(`Числа сторін \n b: ${b} \n c: ${c} \n в сумі = ${b + c} \n що є більше значення сторони a: ${a}`);
    }
}else{
    alert('Введені дані не корректні')
}

