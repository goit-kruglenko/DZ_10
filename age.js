/*global document: false */


function age() {
    'use strict';
    var uAge, result, currentYear;
    currentYear = 2017;
    uAge = document.getElementById('Age').value;

    if ((uAge.length > 2 && uAge.length !== 4) || uAge.length === 0 || parseInt(uAge, 0) > currentYear || parseInt(uAge, 0) === 'undefined') {
        result = "Что-то пошло не так! Проверьте заполненные поля.";
        document.getElementById("outAge").innerHTML = result;
        document.getElementById('Age').className = 'uk-input uk-form-danger';
        return;
    }
    document.getElementById('Age').className = 'uk-input uk-form-success';
    if (((uAge.length <= 2 && parseInt(uAge, 10)) >= 1 && (parseInt(uAge, 10) < 16)) || (uAge.length === 4 && (currentYear - parseInt(uAge, 10) <= 16))) {
        result = 'Вы еще молоды';
        document.getElementById('Age').className = 'uk-input uk-form-danger';
    } else {
        result = "Добро пожаловать!";
    }
    document.getElementById("outAge").innerHTML = result;
}

document.getElementById('btnAge').onclick = age;
