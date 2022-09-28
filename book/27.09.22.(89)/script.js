'use strict';

let test = true;
if (test === false) {
    console.log('yeseee');
} else {
    console.log('nope');
}

if (test !== true) {
    console.log('yeseeee its true');
} else {
    console.log('nie');
}

let y = 'yes its trye',
    x = 'nope its fals';

if (!test) {
    console.log(y);
} else {
    console.log(x);
}

if (test !== false) {
    console.log(y);
} else {
    console.log(x);
}

if (!test) {
    console.log(y);
} else {
    console.log(x);
}

if (test) {
    console.log('+++');
} else {
    console.log('---');
}
