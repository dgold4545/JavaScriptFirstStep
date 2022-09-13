'use strict';

let num = 3;

switch (num) {
    case 1:
        console.log('111111');
    case 2:
        console.log('222222');
    case 3:
        console.log('33333');
}

let res;

switch (num) {
    case 1:
        res = 'a';
        break;
    case 2:
        res = 'a';
        break;
    case 3:
        res = 'b';
        break;
}

console.log(res);

if (num == 1 || num == 2) {
    res = 'a';
}

if (num == 3) {
    res = 'b';
}

console.log(res);
