/*global document: false */


function login() {
    'use strict';
    // alex: 777 
    // ivan: 334455 
    // petr: b5678
    var uLogin, uPassword, result;
    uLogin = document.getElementById('login').value;
    uPassword = document.getElementById('password').value;
    if (uLogin.length === 0 || uPassword.length === 0) {
        result = "Что-то пошло не так! Проверьте заполненные поля.";
        document.getElementById("outLogin").innerHTML = result;
        return;
    }
    if ((uLogin === "alex" && uPassword === '777') || (uLogin === "ivan" && uPassword === '334455') || (uLogin === "petr" && uPassword === "b5678")) {
        result = "Добро пожаловать!";
    } else {
        result = "Ошибка";
    }
    document.getElementById("outLogin").innerHTML = result;
}

document.getElementById('btnLogin').onclick = login;
