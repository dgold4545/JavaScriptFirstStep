'use strict';

let test = '12345';

console.log(test[0] + test[1]);

let userAge = '33';
console.log(Number(userAge[0]) + Number(userAge[1]));

console.log(Number(test[0]) + Number(test[1]));

console.log(
    Number(test[0]) +
        Number(test[1]) +
        Number(test[2]) +
        Number(test[3]) +
        Number(test[4])
);

let test1 = 12345;
console.log(test1[1]);

test1 = String(test1);
console.log(test1[1]);

console.log(test1[0] + test1[1]);
console.log(Number(test1[0]) + Number(test1[1]));

console.log(test1[2] * test1[3]);

let apollo = 12345;

let apollo1 = String(apollo);
console.log(apollo1);

console.log(
    Number(apollo1[0]) +
        Number(apollo1[1]) +
        Number(apollo1[2]) +
        Number(apollo1[3]) +
        Number(apollo1[4])
);

console.log(apollo1[0] * apollo1[1] * apollo1[2] * apollo1[3] * apollo1[4]);

console.log(apollo1[4] + apollo1[3] + apollo1[2] + apollo1[1] + apollo1[0]);
