'use strict';

let res = 1;

if (true) {
    res = 2;
}

console.log(res); // выведет 2

res = 1;

if (true) {
    let res = 2; // объявим переменную через let
}

console.log(res); // выведет 1, а не 2!
