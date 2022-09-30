'use strict';

let min = 49;

if (min >= 0 && min <= 14) {
    console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
    console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
    console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
    console.log('4 четверть');
}

if (min >= 0 && min < 20) {
    console.log('the first 20 min in the hour');
} else if (min >= 20 && min < 40) {
    console.log('the second 20 min in the hour');
} else if (min < 61 && min >= 40) {
    console.log('the third 20 min in the hour');
}
