'use strict';

let str = '12345';

if (str[0] == 1) {
    console.log('!!!!!');
}

if (str[str.length - 1] == 5) {
    console.log('yes ');
}

let str1 = 'abcde';

if (str1[0] === 'a') {
    console.log('show me ', str1);
}

let str2 = 's;gshdfg;sdhfglsdfgh; zcx';

if (str2[str2.length - 1] == 'x') {
    console.log('show me your love');
}

let str3 = 'abxkfgjs;dlfgjsdlghjklfgjkll fslkgja ;lgk';
if (str3[0] == 'a' || str3[1] == 'b') {
    console.log(str3.length);
}
