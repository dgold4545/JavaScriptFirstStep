'use strict';

let ok = confirm(' enter your name');
console.log(ok);

ok = confirm('are you adult');

if (ok) {
    console.log('yes you are adult');
} else {
    console.log('nope you cannot pass');
}

ok = confirm('are you adult, are you have 18 yers');

if (ok) {
    console.log('you have age more 17');
} else {
    console.log('you to young');
}
