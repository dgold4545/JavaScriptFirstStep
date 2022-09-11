'use strict';

let arr = ['a', 'b', 'c'];
arr[4] = '!';

console.log(arr);
console.log(arr.length);

console.log(arr[arr.length - 2]);

let arr1 = [];

arr1[3] = 'a';
console.log(arr.length);
console.log(arr1);
arr1[8] = 'b';
console.log(arr1.length);
console.log(arr1);
