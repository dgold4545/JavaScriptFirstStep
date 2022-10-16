'use strict';

// function func() {

// }

func();
func();

function func() {
    console.log('!');
}

function currentUserName() {
    console.log('Dima');
}

currentUserName();

function accountNumber() {
    for (let i = 1; i < 101; i++) {
        console.log('{for}[1-100]', i);
    }
}

accountNumber();
currentUserName();
accountNumber();
