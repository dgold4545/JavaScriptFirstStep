'use strict';

let arr = [];
console.log(arr);

arr[0] = 'a';
console.log(arr);
arr[1] = 'b';
arr[2] = 'c';

console.log(arr);

let arr1 = ['a', 'b', 'c'];
console.log(arr.length);

arr1[3] = 2;
arr1[4] = arr1[3]++;
arr1[5] = arr1[4]++;
console.log(arr1);

let arr2 = [];

arr2[0] = 1;
arr2[1] = 45;
arr2[2] = 18;

console.log(arr2);
console.log(arr2[0] + arr2[2]);

let arr3 = ['a', 'b', 'c'];
console.log(arr3);

arr3[3] = 'd';
console.log(arr3);

let arr4 = [1, 2, 3];

let arr5 = [];
arr5[0] = 1;
arr5[1] = 2;
arr5[2] = 3;

console.log(arr5);

let arr6 = [1, 2, 3];
arr6[3] = 4;
arr6[4] = 5;
console.log(arr6);
