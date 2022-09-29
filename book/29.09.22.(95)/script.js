'use strict';

let num = 0;

if (num >= 0) {
    if (num <= 5) {
        console.log('less < then ==5');
    } else {
        console.log('more  > then == 5');
    }
} else {
    console.log('less < then == 0');
}

num = 67;
let sumNum;
if (num >= 10 && num <= 99) {
    let num1 = String(num);
    let num2 = num1[0];
    let num3 = num1[1];
    let num4 = Number(num2) + Number(num3);
    sumNum = num4;
    if (sumNum >= 9) {
        console.log('сумма цифр двухзначна.');
    } else {
        console.log('сумма цифр однозначна');
    }
} else {
    console.log('число не попадает в диапазон от 10 до 99 ');
}
