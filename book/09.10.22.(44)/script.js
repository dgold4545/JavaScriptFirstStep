'use strict';

let arr = [];
console.log(arr);

arr.push('a');
console.log(arr);

arr.push('b');
console.log(arr);

arr.push('c');
console.log(arr);

arr.push(1, 2, 3);
console.log(arr);
arr.push('dima', 'olu', 'da-da', 3, 4, 5);
console.log(arr);
console.log(arr.length);

console.log(arr[arr.length - 1]);

let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);
arr1[4] = 9;
console.log(arr1);
