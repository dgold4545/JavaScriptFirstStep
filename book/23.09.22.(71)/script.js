'use strict';

let obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);

let obj1 = { x: 1, y: 2, z: 3 };
let key = 'x';

console.log(obj1[key]);

let obj2 = { x: 1, y: 2, z: 3 };
let sum = obj2['x'] + obj2['y'] + obj2['z'];

console.log(sum);

let obj3 = { x: 1, y: 2, z: 3 };
let key3 = Object.keys(obj3);
console.log(key3);
console.log(key3.length);
