'use strict';

let arr = ['a', 'b', 'c'];

console.log(arr);

arr.push(4, 5, 6);
console.log(arr);

delete arr[1];
console.log(arr);

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.length);
console.log(arr1);

delete arr1[0];
delete arr1[3];

console.log(arr1);

console.log(arr1[arr1.length - 2]);
