'use strict';
let test = {
    x: 1,
    y: 2,
    z: 3,
};
console.log(test);
console.log(typeof test);

test = { x: 1, y: 2, z: 3 };
console.log(typeof test.x);

test = [1, 2, 3];
console.log(typeof test);

test = [1, 2, 3];
console.log(typeof test[1]);

let test1 = [1, 2, 3];
let test2 = 1;

console.log(typeof test1);

test1 = [1, 2, 3];
test2 = 1;

console.log(typeof test1[test2]);

let arr = ['string', 'number', 'boolean', null, undefined, Symbol, BigInt];
