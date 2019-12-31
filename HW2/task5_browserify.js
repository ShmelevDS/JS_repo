/* Очень долго мучался и разбирался с import/export в JS (извните, но по сравнению с python'ом это просто кромешный ад).
Добился того, что файлы task4.js и task5.js нормально работают в node, но не поддерживаются браузером из-за
того, что нет встроенной поддержки require(). Если делать по ES6 с export default и import, то еще сложнее выходит. В итоге 
для того что бы нормально работало в браузере использовал browserify, хотя как по мне очень странная штука,
по сути она делает огромную страшную функциию из всех выбранных файлов. Да это работает, но я стакким же успеххом мог бы
вручную закинуть экспортируемые фунции в нужный файл и все тоже работало бы, наверное я что-то не понимаю. Не могли бы вы дать
комментарий по этой теме при разборе ДЗ? Заранее спасибо! */
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

function summ(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    } else {
        return 'function parameters must be of "Number" type!';
    }
};

function multiply(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a * b;
    } else {
        return 'function parameters must be of "Number" type!';
    }
};

function diff(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a - b;
    } else {
        return 'function parameters must be of "Number" type!';
    }
};

function divide(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a / b;
    } else {
        return 'function parameters must be of "Number" type!';
    }
};

function mathOperation(a, b, operation) {
    let res
    switch(operation) {
        case 'summ':
            res = summ(a, b);
            break;
        case 'multiply':
            res = multiply(a, b);
            break;
        case 'diff':
            res = diff(a, b);
            break;
        case 'divide':
            res = divide(a, b);
            break;
        default:
            console.log('wrong operation name!');
    }
    return res
}

module.exports.mathOperation = mathOperation;
},{}],2:[function(require,module,exports){
var my_calc = require('./task4.js');
let arg1 = 15;
let arg2 = 10;
console.log(`${arg1} plus ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'summ')}`);
console.log(`${arg1} times ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'multiply')}`);
console.log(`${arg1} minus ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'diff')}`);
console.log(`${arg1} divided by ${arg2} equals ${my_calc.mathOperation(arg1, arg2, 'divide')}`);
},{"./task4.js":1}]},{},[2]);
