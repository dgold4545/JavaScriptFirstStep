"use strict";

function func(num) {
    console.log(num ** 2);
}

function func1(num = 0) {
    console.log(num ** 2);
}

func1(2);

function fun(num = 5) {
    console.log(num * num);
}

fun(2);
fun(3);
fun();

function fun1(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}

fun1(2, 3);
fun1(3);
fun1();
