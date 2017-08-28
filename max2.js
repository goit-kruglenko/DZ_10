/*global document: false */

function maxTwo() {
    // Функция проверки вводимых данных 

    "use strict";
    var result, one, two;


    one = parseInt(document.getElementById('inptMax2a').value, 10);
    two = parseInt(document.getElementById('inptMax2b').value, 10);

    document.getElementById('inptMax2a').className = isNaN(one) ? 'uk-input uk-form-danger' : 'uk-input uk-form-success';
    document.getElementById('inptMax2b').className = isNaN(two) ? 'uk-input uk-form-danger' : 'uk-input uk-form-success';

    if (isNaN(one) || isNaN(two)) {
        result = "Что-то пошло не так, проверьте значения полей, отмеченных красным.";
    }
    if (one > two) {
        result = "Первое число <i>" + one + "</i> больше второго <i> " + two + "</i>.";
    }
    if (one < two) {
        result = "Первое число <i>" + one + "</i> меньше второго <i>" + two + "</i>.";
    }
    if (one === two) {
        result = "Первое число <i>" + one + "</i> равно второму <i>" + two + "</i>.";
    }
    document.getElementById('outMax2').innerHTML = result;
}


document.getElementById('btnMax2').onclick = maxTwo;
