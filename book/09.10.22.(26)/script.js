'use strict';

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(+0));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(''));

console.log(Boolean(-1));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));

let test = Boolean(3);

console.log(test);

let test1 = Boolean(0);
console.log(test1);

let test2 = Boolean(-1);
console.log(test2);

let test3 = Boolean(-0);
console.log(test3);

let test4 = Boolean(+0);
console.log(test4);

let test5 = Boolean('abc');
console.log(test5);

let test6 = Boolean('');
console.log(test6);

let test7 = Boolean('0');
console.log(test7);

let test8 = Boolean(true);
console.log(test8);

let test9 = Boolean(false);
console.log(test9);

let test10 = Boolean('true');
console.log(test10);

let test11 = Boolean('false');
console.log(test11);

console.log(Boolean(null));

console.log(Boolean('null'));

console.log(Boolean(undefined));

console.log(Boolean('undefined'));

console.log(Boolean(NaN));
console.log(Boolean('NaN'));

console.log(Boolean(3 * 'abc'));

console.log(Boolean(Infinity));
console.log(Boolean(1 / 0));
