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