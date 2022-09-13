'use strict';

let min = 40;

if (min >= 0 && min <= 14) {
    console.log('the first quater');
}

if (min >= 15 && min <= 29) {
    console.log('the second quater');
}

if (min >= 30 && min <= 44) {
    console.log('the third quater');
}

if (min >= 45 && min <= 59) {
    console.log('the fouth quater');
}

if (min >= 0 && min < 20) {
    console.log('the first 20 min ');
} else if (min >= 20 && min < 40) {
    console.log('the second 20 min');
} else {
    console.log('last 20 min');
}
