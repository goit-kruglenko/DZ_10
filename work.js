/*global document: false */


function work() {
    'use strict';
    var uWork, result;
    result = "Продолжительность вашего стажа слишком мала.";

    uWork = document.getElementById('Work').value;

    if (uWork.length === 0 || parseInt(uWork, 10) === 'undefined') {
        result = "Что-то пошло не так! Проверьте заполненные поля.";
        document.getElementById("outWork").innerHTML = result;
        document.getElementById('Work').className = 'uk-input uk-form-danger';
        return;
    }
    if (parseInt(uWork, 10) < 0) {
        result = "Продолжительность стажа не может быть отрицательной.";
        document.getElementById("outWork").innerHTML = result;
        document.getElementById('Work').className = 'uk-input uk-form-danger';
        return;
    }

    document.getElementById('Work').className = 'uk-input uk-form-success';

    if (parseInt(uWork, 10) >= 3 && parseInt(uWork, 10) < 10) {
        result = "Ваша надбавка составляет 10% от ставки.";

    }
    if (parseInt(uWork, 10) >= 10 && parseInt(uWork, 10) < 20) {

        result = "Ваша надбавка составляет 20% от ставки.";
    }
    if (parseInt(uWork, 10) >= 20 && parseInt(uWork, 10) < 30) {
        result = "Тут в условиях задачи пропуск, это ошибка.";

    }
    if (parseInt(uWork, 10) >= 30) {
        result = "Ваша надбавка составляет 30% от ставки.";
    }
    document.getElementById("outWork").innerHTML = result;
}

document.getElementById('btnWork').onclick = work;
