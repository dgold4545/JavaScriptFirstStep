'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

let keys = Object.keys(obj);
console.log(keys);

let obj1 = {
    x: 1,
    y: 2,
    z: 3,
};
let res = Object.keys(obj1);
console.log(res);

let pizza = {
    size: 12,
    prise: 299,
    time: 30,
};
console.log(pizza);
let summ = Object.keys(pizza);
console.log(summ);

console.log(pizza.size, pizza.prise);
