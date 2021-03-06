/*global document: false */

function maxOne() {
    // Функция проверки вводимых данных 

    "use strict";
    var result, one, two;


    one = parseInt(document.getElementById('inptMax1a').value, 10);
    two = parseInt(document.getElementById('inptMax1b').value, 10);

    document.getElementById('inptMax1a').className = isNaN(one) ? 'uk-input uk-form-danger' : 'uk-input uk-form-success';
    document.getElementById('inptMax1b').className = isNaN(two) ? 'uk-input uk-form-danger' : 'uk-input uk-form-success';

    if (isNaN(one) || isNaN(two)) {
        result = "Что-то пошло не так, проверьте значения полей, отмеченных красным.";
    }
    if (one >= two) {
        result = "Число <i>" + one + "</i> — больше.";
    }
    if (one <= two) {
        result = "Число <i>" + two + "</i> — больше.";
    }
    document.getElementById('outMax1').innerHTML = result;
}


document.getElementById('btnMax1').onclick = maxOne;
