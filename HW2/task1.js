'use strict'
let a = 1, b = 1, c, d;

c = ++a;
console.log(c);

d = b++;
console.log(d);

c = 2 + ++a;
console.log(c);

d = 2 + b++;
console.log(d);

console.log(a);
console.log(b);