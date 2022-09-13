'use strict';
let str = '12345qwerty';

if (str.length >= 3) {
    console.log('!,', str, str.length, str[str.length - 1]);
}

let arr = [123];
let arr2 = String(arr);

if (arr2.length === 3) {
    console.log('yes its true', arr2.length);
    if (arr2.length === 3) {
        console.log(Number(arr2[0]) + Number(arr2[1]) + Number(arr2[2]));
    }
}
