'use strict';

let arr = ['a', 'b', 'c'];

arr[4] = '!';

console.log(arr);

console.log(arr[arr.length - 2]);

console.log(typeof arr[arr.length - 2]);

console.log(arr.length);

arr = [];

arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);
