'use strict';

let str = '12345';

if (str[0] == 1) {
    console.log('!');
}

let last = str[str.length - 1];

if (last == 5) {
    console.log('!!!');
}

let str1 = 'abc123';

if (str1[0] == 'a') {
    console.log('yes start A');
}

let str2 = 'asdfsdafszx';
console.log(str2.length);

if (str2[str2.length - 1] == 'x') {
    console.log('te te te xxxx');
}

let str3 = 'bb gd ab ba df';

if (str3[0] == 'a' || str3[0] == 'b') {
    console.log('yes its true A or B');
}
