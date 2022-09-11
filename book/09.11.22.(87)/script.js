'use strict';

let test = 0;

if (test == true) {
    console.log('daaaa true');
} else {
    console.log('nope false');
}

let falseData = [
    '',
    Infinity,
    -Infinity,
    0,
    -0,
    null,
    undefined,
    NaN,
    false,
    0n,
];

console.log(falseData);

let test2 = 1;

if (test2 == true) {
    console.log('+++');
} else {
    console.log('---');
}

let test3 = 0;

if (test3 == true) {
    console.log('+++');
} else {
    console.log('---');
}

let test4 = 1;

if (test4 == false) {
    console.log('+++');
} else {
    console.log('---');
}

let test5 = 1;

if (test5 == false) {
    console.log('+++');
} else {
    console.log('---');
}

let test6 = 1;

if (test6 != true) {
    console.log('+++');
} else {
    console.log('---');
}

let test7 = '';

if (test7 == false) {
    console.log('+++');
} else {
    console.log('---');
}

let test8;

if (test8 == true) {
    console.log('+++');
} else {
    console.log('---');
}

let test9 = 3 * 'a';

if (test9 == true) {
    console.log('+++');
} else {
    console.log('---');
}
