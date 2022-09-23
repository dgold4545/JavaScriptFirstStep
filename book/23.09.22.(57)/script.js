'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(obj.length);

console.log(Object.keys(obj).length);

let pizza = {
    time: 30,
    cost: 299,
    place: 'troya',
    size: 'xl',
};

console.log(pizza);
console.log(Object.keys(pizza).length);

obj = {
    x: 1,
    y: 2,
    z: 3,
};
console.log(obj, 'size of obj', Object.keys(obj).length);
