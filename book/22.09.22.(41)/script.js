'use strict';

let arr = ['a', 'b', 'c'];

arr[0] = '!';
console.log(arr);

let fima = ['a', 'b', 'c'];
console.log(fima);
fima[0] = 1;
fima[1] = 2;
fima[2] = 3;
console.log(fima);
let doma = ['a', 'b', 'c'];

doma[0] = doma[0] + ' !';
doma[1] = doma[1] + ' do,a';
doma[2] = doma[2] + ' amod';

console.log(doma);

let sasha = [1, 2, 'vasy'];

sasha[0] += ' !1!';
sasha[1] += ' dima';
sasha[2] += ' cd';
console.log(sasha);

let ita = [12, 123, 173];
ita[0] += 3;
ita[1] += 22;
ita[2] += 117;

console.log(ita);

ita[2] -= 292;
console.log(ita[2]);
console.log(typeof ita[2]);

let vova = [1, 1, 1, 1];

vova[0]++;
++vova[1];
vova[2]--;
--vova[3];

console.log(vova);

let vava = [1, 1, 1];
vava[0]++;
++vava[1];
vava[2]++;
console.log(vava);
