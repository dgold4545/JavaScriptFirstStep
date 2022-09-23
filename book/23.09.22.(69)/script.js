'use strict';

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(obj);

obj = {
    x: 1,
    y: 2,
    z: 3,
};

obj.a = '+';

console.log(obj);

const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr);

const arr1 = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr1);

const arr2 = ['a', 'b', 'c'];
arr2 = ['a', 'b', 'c'];
console.log(arr2);
