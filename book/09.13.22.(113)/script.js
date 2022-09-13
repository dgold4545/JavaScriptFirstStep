'use strict';

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

for (let key in obj) {
    console.log(key);
}

for (let key in obj) {
    console.log(obj[key]);
}

let objHome = {
    x: 1,
    y: 2,
    z: 3,
    numberFlet: 614,
    numberFloor: 20,
    squer: 73,
};

for (let key in objHome) {
    console.log(key);
}

for (let dima in objHome) {
    console.log(objHome[dima]);
}

let obj1 = {};
obj1 = {
    1: 'a',
    2: 'b',
    3: 'c',
};

console.log(obj1[1]);

obj = {
    x: 1,
    y: 2,
    z: 3,
};

for (let key in obj) {
    console.log(key);
}

for (let keys in obj) {
    console.log(obj[keys]);
}
