'use strict';

let num = 5;

if (num == 1) {
    console.log('value1');
} else if (num == 2) {
    console.log('value2');
} else if (num == 3) {
    console.log('value3');
} else {
    console.log('неверное значение переменной num');
}

let day = 0;

if (day > 0 && day < 10) {
    console.log('1. day < 10');
} else if (day > 0 && day < 11) {
    console.log('2. day > 10 && day < 20');
} else if (day <= 31 && day > 20) {
    console.log('3. day < 30 && day > 20');
} else if (day == 0 || day > 31) {
    console.log('you are full the monts has 31 days');
}
