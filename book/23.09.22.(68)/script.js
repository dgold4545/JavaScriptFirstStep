'use strict';

let obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

let obj2 = obj1;

obj2.a = '!';

console.log(obj1, obj2);

let dima = 3;
let fima = dima;

fima = fima * 2;

console.log(dima, fima);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);

let arr11 = [1, 2, 3];
let arr22 = arr11;

arr11[0] = 'a';
arr22[1] = 'b';

console.log(arr11);

let arr111 = [1, 2, 3];
let arr222 = arr111;

arr111[0] = 'a';
arr222[0] = 'b';

console.log(arr222);
