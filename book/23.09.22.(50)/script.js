'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(obj);

console.log(obj['a']);
console.log(obj['c']);

let arr = [];
arr.push = 12;
arr.push = 12;
arr.push = 42;

arr = [1];
arr.push(12, 21, 42);
delete arr[3];
console.log(arr);

let user = {
    name: 'dima',
    surname: 'golovskyi',
    patronymic: 'anatoly',
};

// alert(user['name']);
console.log(user['surname']);
console.log(user['name']);
console.log(user['patronymic']);
