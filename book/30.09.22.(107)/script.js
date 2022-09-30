'use strict';

let a = 10;
let b = 3;

console.log(a % b);

(a = 10), (b = 5);
console.log(a % b);

a = 10;
b = 4;

if (a % b === 0) {
    console.log('делится нацело');
} else {
    console.log('делится с остатком');
}

if (a % b === 0) {
    console.log('делится нацело');
} else {
    console.log('делится с остатком ' + (a % b));
}

let num = 21451432213490;

if (num % 2 === 0) {
    console.log(num, '');
}

let num2 = 2342134523451;

if (num2 % 3 === 0) {
    console.log(num2 / 2, num2 / 3);
}
