'use strict';

const generateKey = function (lenght, characters) {
    let result = '';
    for (let a = 0; a < lenght; a++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxsdvkjsdkdvmavyz0123456789';
const key = generateKey(8, characters)
console.log(`${key} \nlength: ${key.length}`);
