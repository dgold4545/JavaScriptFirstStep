'use strict';

let num = 1;

if (num == 1) {
    console.log('value1');
} else if (num == 2) {
    console.log('value2');
} else if (num == 3) {
    console.log('value3');
}

if (num == 1) {
    console.log('value1');
} else if (num == 2) {
    console.log('value2');
} else if (num == 3) {
    console.log('value3');
} else {
    console.log('неверное значение переменной num');
}

let day = 32;

if (day <= 10) {
    console.log('your day is 1-10');
} else if (day < 20) {
    console.log('your day is 11-20');
} else if (day < 30) {
    console.log('yout dai is 21-30');
} else if (day <= 31) {
    console.log('your day is over 30');
} else {
    console.log('we dont have days more 31');
}
