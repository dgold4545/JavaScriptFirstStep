'use strict';

let test = true;

if (test == true) {
    console.log('++++');
} else {
    console.log('----');
}

test = 1;

if (test == true) {
    console.log('trueeeeee');
} else {
    console.log('falseeeeee');
}

test = 0;

if (test == true) {
    console.log('trueeeee');
} else {
    console.log('falseseeeeee');
}

test = 1;

if (Boolean(test) == true) {
    console.log('+++');
} else {
    console.log('dalsee');
}

let arr = [0, false, undefined, null, null, ''];

test = 1;

if (test == true) {
    console.log('+++');
} else {
    console.log('---');
}

test = 0;

if (test == true) {
    console.log('+++');
} else {
    console.log('---');
}

test = 1;

if (test == false) {
    console.log('+++');
} else {
    console.log('---');
}

test = 1;

if (test != true) {
    console.log('+++');
} else {
    console.log('---');
}

test = '';

if (test == false) {
    console.log('+++');
} else {
    console.log('---');
}

test;

if (test == true) {
    console.log('+++');
} else {
    console.log('---');
}

test = 3 * 'a';

if (test == true) {
    console.log('+++');
} else {
    console.log('---');
}
