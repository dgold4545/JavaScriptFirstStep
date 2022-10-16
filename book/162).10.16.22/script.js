"use strict";
function func(num) {
    return num ** 2;
}

let res = func(func(2));
console.log(res);

function square(num) {
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}

res = cube(square(2));
console.log(res);

function sum(num1, num2) {
    return num1 + num2;
}

res = sum(square(2), square(3));
console.log(res);

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

let fineRes = round(sqrt(4));
console.log(fineRes);

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let fineResTwo = round(sum(sqrt(2), sqrt(2), sqrt(2)));
console.log(fineResTwo);
