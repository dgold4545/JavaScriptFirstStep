'use strict';

let num = 3;

switch (num) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
}

num = 2;
let res;

switch (num) {
    case 1:
    case 2:
        res = 'a';
        break;
    case 3:
        res = 'b';
        break;
}

console.log(res);

num = 1;
res;

if (num == 1 || num == 2) {
    res = 'a';
}
if (num == 3) {
    res = 'b';
}
console.log('res');
