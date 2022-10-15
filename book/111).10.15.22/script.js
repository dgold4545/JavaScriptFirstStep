'use strict';

for (let i = 1; i <= 9; i++) {
    console.log('[for - 1]', i);
}

for (let i = 1; i <= 9; i += 2) {
    console.log('[for - 2]', i);
}

for (let i = 10; i > 0; i--) {
    console.log('[for - 10 ]', i);
}

console.log('____________');

for (let i = 1; i < 101; i++) {
    console.log(`[for 1 - ${i} - 100]`, i);
}

console.log('____________');

for (let i = 11; i < 34; i++) {
    console.log(`[for 11 - ${i} - 33]`, i);
}

console.log('____________');

for (let i = 0; i < 101; i += 2) {
    console.log(`[for 0 - ${i} - 100]`, i);
}

console.log('____________');

for (let i = 1; i < 100; i += 2) {
    console.log(`[for 0 - ${i} - 100]`, i);
}

console.log('____________');

for (let i = 100; i >= 0; i--) {
    console.log(`[for 100 - ${i} - 0]`, i);
}
