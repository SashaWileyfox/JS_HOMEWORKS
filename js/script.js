'use strict';

//task #1

const user = {
    name: 'John',
    surname: 'Smith'
}
user.name = 'Pete';

delete user.name;

console.log(user)

//task #3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log('Accrued: ' + sum)

