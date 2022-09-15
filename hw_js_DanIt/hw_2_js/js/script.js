'use strict';

let userName;
let userAge;
let userAnswer;

userName = prompt('Enter your Name');

console.log(userName);
while (userName == '' || userName == isNaN || userName == null) {
    userName = prompt('Enter your Name');
}
userAge = Number(prompt('Enter your Age'));
console.log(userAge);

while (userAnswer == isNaN) {
    Number(prompt('Enter your Age'));
}

if (userAge < 18) {
    alert('You are not allowed to visit this website');
} else if (userAge > 18 && userAge <= 22) {
    userAnswer = confirm('Are you sure you want to continue?');
    if (userAnswer) {
        alert(`Welcome, ${userName}`);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert(`Welcome, ${userName}`);
}

console.log(userName);
console.log(userAge);
