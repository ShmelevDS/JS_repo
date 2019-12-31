'use strict'
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        alert(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        alert(`${i} - четное число`);
    } else if (i % 2 != 0) {
        alert(`${i} - нечетное число`);
    }
};