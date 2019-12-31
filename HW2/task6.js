'use strict'
let money = +prompt('Сколько денег вы хотите снять с банковского счета?');
console.log(money);
let last = money % 10;

if (last === 1) {
    alert(`Вы сняли ${money} рубль`);
} else if (last < 5 && last > 0) {
    alert(`Вы сняли ${money} рубля`);
} else {
    alert(`Вы сняли ${money} рублей`);
}