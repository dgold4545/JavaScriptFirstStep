'use strict';

function func(num) {
    console.log(num ** 2);
}

func(2);
func(3);

function funcUpToEight(num) {
    console.log(num ** 8);
}

funcUpToEight(2);

function UpToThree(num) {
    console.log(num ** 3);
}

UpToThree(7);

function checkedPlus(num) {
    if (num > 0) {
        console.log('++++');
    } else {
        console.log('_----_');
    }
}

checkedPlus(8);

checkedPlus(123);
