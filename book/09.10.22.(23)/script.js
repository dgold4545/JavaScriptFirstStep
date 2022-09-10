'use strict';

let num = parseInt('12px');
console.log(num);

let num1 = parseInt('12.5px');
console.log(num1);

let num2 = parseFloat('12.5px');
console.log(num2);

let num3 = parseFloat('12px');
console.log(num3);

let str1 = '5px';
let str2 = '6px';

console.log(parseInt(str1) + parseInt(str2));

let str3 = '5.5px';
let str4 = '6.25';
console.log(parseFloat(str3) + parseFloat(str4));

let str5 = '5.5px';
let str6 = '6.25px';
console.log(parseFloat(str5) + parseFloat(str6) + 'px');
