'use strict'
let k = 15;
let l = 3;
let m;

if (k >=0 && l >= 0) {
    m = k - l;
} else if  (k < 0 && l < 0) {
    m = k * l;
} else {
    m = k + l;
}

console.log(m)