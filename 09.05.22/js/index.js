"use strict"

let userName = prompt ("введите ваше имя", "enter your name");
let userAge = Number(prompt("введите ваш   возраст", "enter your age")) ;

if (typeof (userName) == "") {
    userNewName = prompt ("enter you name use letters")
}

console.log(userNewName);

console.log (typeof userName, userName);
console.log(typeof userAge, userAge);

let box1 = userName;
let box2 = userAge;
console.log("box1, box2", box1, box2)

if (userAge < 18) {
    alert ("You are not allowed to visit this website.")
}

else if (userAge > 22) {
    alert(`Welcome, ${userName}`);
}

else if (userAge >= 18 || userAge <= 22) {
    let dimaEnter = confirm ("Are you sure you want to continue?");
    console.log (dimaEnter);
    if (dimaEnter == true) {
        alert(`Welcome, ${userName}`)
    }
    else if (dimaEnter == false) {
        alert("You are not allowed to visit this website.");
    }
}


