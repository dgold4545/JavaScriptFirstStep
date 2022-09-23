'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

console.log('b' in obj);

console.log('x' in obj);

let pizza = {
    size: 'lx',
    price: 299,
    color: 'green',
};

console.log('size' in pizza);
console.log('prise' in pizza);

pizza.size = 'l';
pizza.color = 'black';
pizza.time = 30;
console.log(pizza);

obj = { x: 1, y: 2, z: 3 };

console.log('x' in obj);
console.log('w' in obj);
