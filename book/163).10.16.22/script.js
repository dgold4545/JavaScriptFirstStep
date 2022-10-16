"use strict";

function func(num) {
    return num ** 2;

    console.log("!!!!!");
}
let res = func(3);

console.log(res);

function func1(num) {
    if (num >= 0) {
        return "++++";
    } else {
        return "----";
    }
}

console.log(func1(3));
console.log(func1(-3));

console.log("__)_)_______________");

function func3(num) {
    return num;

    let res = num ** 2;
    return res;
}

console.log(func3(3));
console.log("__)_)_______________");

function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    } else {
        return num ** 2;
    }
}

console.log(func(10));
console.log(func(-5));

function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    }

    return num ** 2;
}

console.log(func(10));
console.log(func(-5));
