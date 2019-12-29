var my_calc = require('./task4.js');
let a = 15;
let b = 10;
console.log(`${a} plus ${b} equals ${my_calc.mathOperation(a, b, 'summ')}`);
console.log(`${a} times ${b} equals ${my_calc.mathOperation(a, b, 'multiply')}`);
console.log(`${a} minus ${b} equals ${my_calc.mathOperation(a, b, 'diff')}`);
console.log(`${a} divided by ${b} equals ${my_calc.mathOperation(a, b, 'divide')}`);