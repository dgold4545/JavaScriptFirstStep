'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

let key = 'b';

obj = {
    [key]: 1,
    b: 2,
    c: 3,
};

obj = {
    [key + '1']: 1,
    [key + '2']: 2,
    [key + '3']: 3,
};

console.log(obj);

let key1 = 'xX';

let obj1 = {
    [key1]: 1,
    y: 2,
    z: 3,
};
console.log(obj1);

let key111 = 'x';
let key22 = 'y';
let key33 = 'z';

let obj2 = {
    [key111]: 1,
    [key22]: 2,
    [key33]: 3,
};

console.log(obj2);
