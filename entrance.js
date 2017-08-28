/*global document: false */

function getEntrance() {
    "use strict";
    var result, Appartment;

    //    1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. 
    Appartment = parseInt(document.getElementById('inptAppart').value, 10);
    document.getElementById('inptAppart').className = isNaN(Appartment) ? 'uk-input uk-form-danger' : 'uk-input uk-form-success';

    if (isNaN(Appartment)) {
        result = "Похоже, это не число.";
        UIkit.alert("#outEntrance", "danger; animation: true");
    } else if (Appartment >= 1 && Appartment <= 20) {
        result = "Квартира в первом подъезде.";
    } else if (Appartment >= 21 && Appartment <= 48) {
        result = "Квартира во втором подъезде.";
    } else if (Appartment >= 49 && Appartment <= 90) {
        result = "Квартира в третьем подъезде.";
    } else {
        result = 'Этой квартиры нет в доме.'
    }


    document.getElementById('outEntrance').innerHTML = result;
}


document.getElementById('getEntrance').onclick = getEntrance;
