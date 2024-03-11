'use strict';
const year = +prompt('Please enter your year of birth');
let city = prompt('Pleace enter the name of the city in which you live');
const sport = prompt('Please enter your favorite sport');


let message = `You are ${2024 - year} years old; \n`;

switch (sport) {
    case 'football':
        message += `It's cool! Do you want to become like Cristiano Ronaldo \n`;
        break;
    case 'basketball':
        message += `It's cool! Do you want to become like LeBron James \n`;
        break;
    case 'golf':
        message += `It's cool! Do you want to become like Scottie Scheffler \n`;
        break;
    default:
        message += (`${sport} is cool! Keep going! \n`);
}
switch (city) {
    case 'kyiv':
        message += `You live in the capital city of Ukraine \n`;
        break;
    case 'london':
        message += `You live in the capital city of England \n`;
        break;
    case 'washington':
        message += `You live in the capital city of USA \n`;
        break;
    default:
        message += (`You live in  ${city}; \n`);
}
alert(message)

/*(function () {
    const year = +prompt('Please enter your year of birth');
    if (year === 0) {
        alert('Unfortunately, you did not want to enter your year of birth');
        return;
    }

    let city = prompt('Pleace enter the name of the city in which you live');
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    if (city === null || city === '') {
        alert('Unfortunately, you did not want to enter your city');
        return;
    }

    const sport = prompt('Please enter your favorite sport');
    if (sport === null || sport === '') {
        alert('Unfortunately, you did not want to enter your favorite sport');
        return;
    }

    let countries = new Map([
        ['Kyiv', 'Ukraine'],
        ['kyiv', 'Ukraine'],
        ['London', 'England'],
        ['london', 'England'],
        ['Washington', 'USA'],
        ['washington', 'USA']
    ]);
    let sports = new Map([
        ['Football', 'Cristiano Ronaldo'],
        ['football', 'Cristiano Ronaldo'],
        ['Basketball', 'LeBron James'],
        ['basketball', 'LeBron James'],
        ['Golf', 'Scottie Scheffler'],
        ['golf', 'Scottie Scheffler']

    ]);
    const country = countries.get(city);
    const players = sports.get(sport);
    let message = `You are ${2024 - year} years old; \n`;


    if (['kyiv', 'london', 'washington'].includes(city.toLowerCase())) {
        message += `You live in the capital city of ${country} \n`;
    } else {
        message += (`You live in  ${city}; \n`);
    }
    if (['football', 'basketball', 'golf'].includes(sport.toLowerCase())) {
        message += `It's cool! Do you want to become like ${players} \n`;
    } else {
        message += (`${sport} is cool! Keep going! \n`);
    }

    alert(message)
})()*/




