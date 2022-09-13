'use strict';

let a = 10;
let b = 3;

console.log(a % b);

a = 10;
b = 5;

console.log(a % b);

a = 10;
b = 3;

if (a % b === 0) {
    console.log('dell bez ostatka');
} else {
    console.log('dell s ostatkom', +a % b);
}

a = 10;
b = 3;
let rest = a % b;

if (a % b === 0) {
    console.log('dell bez ostatka');
} else {
    console.log('dell s ostatkom', rest);
}

let c = 1332334235153634;

if (c % 2 === 0) {
    console.log('yes / 2', c / 2);
} else {
    console.log('nope', c / 2);
}

c = 124512514351233;

if (c % 3 == 0) {
    console.log('yes', c / 3);
} else {
    console.log('nope', c / 3);
}
