'use strict';

let num = 3;

if (num >= 0) {
    if (num <= 5) {
        console.log('less or equall 5');
    } else {
        console.log('more 5');
    }
} else {
    console.log('less zero 0');
}

num = 39;

if (num >= 10 && num <= 99) {
    console.log('num <= 9', num);
} else {
    console.log('summ num more then 9', num);
}

let num1 = String(num);
console.log(num1);
console.log(num1.length);
let num2 = num1[num1.length - 1] + num1[num1.length - 2];
console.log(num1[num1.length - 1] + num1[num1.length - 2]);

console.log(num2);
let num3 = Number(num1[num1.length - 1]) + Number(num1[num1.length - 2]);
console.log(num3);
console.log(Number(num1[num1.length - 1]) + Number(num1[num1.length - 2]));

if (num >= 10 && num <= 99) {
    if (num3 <= 9) {
        console.log('сумма цифр однозначна');
    } else {
        console.log('сумма цифр двухзначна.');
    }
}
