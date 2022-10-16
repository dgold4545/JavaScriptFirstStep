"use strict";

function func(num) {
    return num ** 2;
}
let res = func(3) + 1;
res += 1;
console.log(res);

console.log(func(5));

res = func(2) + func(3);
console.log(res);

function qube(num = 0) {
    return num ** 3;
}

let resQube = qube(3);
console.log(resQube);

function squer(num = 0) {
    return num ** (1 / 2);
}

squer(3);
console.log(squer(3), squer(4), squer(3) + squer(4));
