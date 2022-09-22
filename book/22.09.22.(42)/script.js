'use strict';

let arr = [];

arr[0] = 'a';
arr[1] = '12';
arr[2] = 34343;

console.log(arr);

arr[3] = 'd';
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 2]);
console.log(typeof arr[arr.length - 1]);

let sima = [];
sima[0] = 122;
sima[1] = 2;
sima[2] = 3;
console.log(sima);

arr = [1, 2, 3];

arr[3] = 4;
arr[4] = 5;
console.log(arr);
