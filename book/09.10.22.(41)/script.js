'use strict';

let arr = ['a', 'b', 'c'];
console.log(arr);
arr[0] = '!';
console.log(arr);

let arr1 = ['a', 'b', 'c'];
console.log(arr1);
arr1[0] = 1;
arr1[1] = -2;
arr1[2] = -3;

console.log(arr1);

let arr2 = ['a', 'b', 'c'];
console.log(arr2);
arr2[0] = arr2[0] + '!';
console.log(arr2);
arr2[1] = arr2[1] + '!';
console.log(arr2);
arr2[2] = arr2[2] + '!';

console.log(arr2);

let arr3 = ['a', 'b', 'c'];
console.log(arr3.length);
arr3[0] += '!';
console.log(arr3);
arr3[1] += '!%)';
console.log(arr3);
arr3[2] += '!88';
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5, 7];
console.log(arr4, arr4.length);

arr4[0] += 3;
arr4[1] += 3;
arr4[2] += 3;
arr4[3] += 3;
arr4[4] += 3;
arr4[5] += 3;
console.log('arr4 [] + 3', arr4);

let arr5 = [1, 2, 3, 4];
console.log(arr5);
arr5[0]++;
console.log(arr5);
++arr5[1];
console.log(arr5);
arr5[2]--;
console.log(arr5);
--arr5[3];
console.log(arr5);

let arr6 = [1, 2.2, 3];
console.log(arr6);
arr6[0]++;
console.log(arr6);
arr6[1]++;
console.log(arr6);
arr6[2]++;
console.log(arr6);

arr6[2] *= 2;
arr6[1] /= 30;
console.log(arr6);
console.log(parseFloat(arr6[1]));
