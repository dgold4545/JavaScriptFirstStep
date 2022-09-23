'use strict';

let obj = {
    1: 'dima',
    21: '12',
    dima: 'fold',
};

console.log(obj);
console.log(obj[1]);
console.log(obj[21]);
console.log(obj['dima']);
console.log(obj.dima);

obj = {
    '1key': 'a',
    'key-2': 'b',
    key3: 'c',
};

console.log(obj);

console.log(obj['1key']);
console.log(obj['key-2']);

// console.log(obj.1key)

console.log(obj['key3']);
console.log(obj['key3']);
console.log(obj.key3);

obj = {
    '1a': 1,
    b2: 2,
    'с-с': 3,
    'd 4': 4,
    e5: 5,
};

console.log(obj);

obj = {
    '1a': 1,
    b2: 2,
    'c-c': 3,
    'd 4': 4,
    e5: 5,
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);

console.log(obj['c-c']);

console.log(obj.b2);
console.log(obj['c-c']);

obj = {
    '1a': 1,
    b2: 2,
    'c-c': 3,
    'd 4': 4,
    e5: 5,
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);
