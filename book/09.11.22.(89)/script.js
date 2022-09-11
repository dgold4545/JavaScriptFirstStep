'use strict';

let test = true;

if (test === false) {
    console.log('yes true');
} else {
    console.log('nope false');
}

if (test !== true) {
    console.log('yes true');
} else {
    console.log('nope false');
}

if (!test) {
    console.log('yes true');
} else {
    console.log('nope false');
}

let test1 = true;

if (test1 != true) {
    console.log('yes true');
} else {
    console.log('nope false');
}

let test2 = true;

if (!test2) {
    console.log('+++');
} else {
    console.log('---');
}

let test3 = true;

if (!test3 == false) {
    console.log('+++');
} else {
    console.log('---');
}
