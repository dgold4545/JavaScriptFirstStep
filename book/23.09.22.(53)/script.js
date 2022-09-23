'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

obj['a'] = '!';

console.log(obj);
console.log(obj.a);

obj.b = '!';
console.log(obj.b);
console.log(obj);

obj = {
    x: 1,
    y: 2,
    z: 3,
};

console.log(obj.x ** 2);
console.log(obj.y ** 2);
console.log(obj.z ** 2);

obj.z = 23;
console.log(obj);

obj['y'] = 12;
console.log(obj);
