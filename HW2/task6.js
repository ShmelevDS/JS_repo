'use strict'
let summ = +prompt('Сколько денег вы хотите снять с банковского счета?');
console.log(summ);
let last = summ % 10;

if (last === 1) {
    alert(`Вы сняли ${summ} рубль`);
} else if (last < 5) {
    alert(`Вы сняли ${summ} рубля`);
} else {
    alert(`Вы сняли ${summ} рублей`);
}