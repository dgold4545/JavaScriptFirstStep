'use strict';

let ok = confirm('text your question!!');
console.log(ok);

ok = confirm('text question');

if (ok) {
    console.log(`${ok} your answer is YES`);
} else {
    console.log('your answer is NOPE');
}

let answer = confirm('are you adult?');

if (answer) {
    alert('you will see big boobs!!');
    console.log('you will see big boobs!!');
} else {
    alert('you will NOT++++ see big boobs!!');
    console.log('');
}
