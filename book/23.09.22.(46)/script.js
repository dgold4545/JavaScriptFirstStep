'use strict';
let arr = ['1', 'b', 'c'];

delete arr[1];
console.log(arr, arr.length);

let userName = ['dima', 'holov', 180, 93, 33];

delete userName[3];
console.log(userName, userName.length);

arr = ['a', 'b', 'c', 'd', 'f'];
console.log(arr, arr.length);
delete arr[4];
delete arr[3 - 1];
console.log(arr, arr.length);
