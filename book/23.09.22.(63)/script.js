'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

delete obj.b;

console.log(obj);

let dima = {
    higth: 180,
    weigth: 94,
    color: 'white',
};

console.log(dima);
delete dima.color;
console.log(dima);

obj = { x: 1, y: 2, z: 3 };
delete obj.x;

console.log('x' in obj);
