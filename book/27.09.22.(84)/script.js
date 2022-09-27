'use strict';
let num = 3;

if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
    console.log('_==++++');
} else {
    console.log('-----');
}

let num1 = 3;
let num2 = 5;

if (num1 > 0 && (num2 == 3 || num2 == 5)) {
    console.log('__++++++++');
} else {
    console.log('------');
}

num = 3;
if ((num > 5 && num < 10) || num == 20) {
    console.log('+++');
} else {
    console.log('---');
}

if (num > 5 || (num > 0 && num < 3)) {
    console.log('+++');
} else {
    console.log('---');
}

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
    console.log('+++');
} else {
    console.log('---');
}
