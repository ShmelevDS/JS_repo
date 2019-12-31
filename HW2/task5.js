let my_calc = require('./task4.js');
let arg1 = 15;
let arg2 = 10;
console.log(`${arg1} plus ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'summ')}`);
console.log(`${arg1} times ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'multiply')}`);
console.log(`${arg1} minus ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'diff')}`);
console.log(`${arg1} divided by ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'divide')}`);