'use strict';

let age = 17;

let adult = age >= 18 ? true : false;

console.log(adult);

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);
let num = -8;
let res;

res = num >= 0 ? (res = '1') : (res = '2');
console.log(res);
