'use strict';

let num = 12345;

if (num[0] == 1) {
    console.log('++++');
} else {
    console.log('_______arr2.length == 3');
}

num = 12345;
console.log(num[0]);

let str = String(num);

if (str[0] == 1) {
    console.log('number 1');
} else {
    console.log('nope');
}

num = 12345;

if (String(num)[0] == 1) {
    console.log('yes');
} else {
    console.log('nope');
}

console.log(String(num)[2]);

num = 22345;

if (String(num)[0] == 1 || String(num)[0] == 2) {
    console.log('yes');
} else {
    console.log('nope');
}

let str1 = 991;

if (String(str1)[2] == 0) {
    console.log('yes my master');
}

num = 134;

if (num % 2 == 0) {
    console.log('da chetnoe');
} else {
    console.log('nope ne chetnoe');
}

if (
    String(num)[2] == 0 ||
    String(num)[2] == 2 ||
    String(num)[2] == 4 ||
    String(num)[2] == 6 ||
    String(num)[2] == 8
) {
    console.log('da chetnoe');
} else {
    console.log(' net ne chetnoe');
}
