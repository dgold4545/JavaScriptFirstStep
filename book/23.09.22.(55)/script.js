'use strict';

let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
};

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);

obj = {
    3: 'c',
    2: 'b',
    1: 'a',
};
console.log(obj[3]);
console.log(obj[2]);
console.log(obj[1]);

obj = {
    54: 'b',
    7: 'a',
    23: 'c',
    123: 'v',
    2: 'cd',
};

console.log(obj);
