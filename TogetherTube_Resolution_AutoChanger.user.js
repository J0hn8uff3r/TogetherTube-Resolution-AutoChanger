// ==UserScript==
// @name        TogetherTube Resolution AutoChanger 0.1
// @namespace   TogetherTube Resolution AutoChanger 0.1
// @description Cambia la resolución en Togethertube a 480
// @include     *togethertube.com/rooms/*
// @version     1
// @grant       none
// ==/UserScript==
function createCookie(name, value, days) { //Función para crear cookies
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) { //Función para leer cookies
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkTotalTime() { //Función para extraer el tiempo total del vídeo actual
    var tiempo = document.getElementsByClassName("navbar-text ng-binding")[0].innerHTML;
    tiempo = tiempo.slice(-5);
    var minutos = tiempo[0] + tiempo[1]
    var segundos = tiempo[3] + tiempo[4]
    tiempo = [minutos, segundos];
    return tiempo;
}

// function checkKeyPressed(event) {
// if (event.keyCode == 32) {//Para el vídeo
// document.getElementsByClassName("fa fa-fw fa-pause")[0].click();
// createCookie("state", "0", 1);
// } else if (event.keyCode == 32 && c == 0) {//Reanuda el vídeo
// document.getElementsByClassName("fa fa-fw fa-play")[0].click();
// createCookie("state", "1", 1);
// }
// }

var control = readCookie("state"); //Variable para saber en qué paso estás
// createCookie("state", "paused", 1);
// createCookie("state", "playing", 1);

// window.addEventListener("keydown", checkKeyPressed, false);

window.onload = function() {
    window.setTimeout(function() {
        last_time = checkTotalTime();
    }, 6000); //Carga el tiempo inicial con delay para no cargar 00:00

    setInterval(function() {
        actual_time = checkTotalTime(); //Comprueba si el tiempo ha cambiado cada x segundos

        if (actual_time[0] != last_time[0] && actual_time[1] != last_time[1]) { //Si minutos actuales y anteriores han cambiado, ha habido un cambio de vídeo
            document.getElementsByClassName("ng-binding")[5].innerHTML = "480p"; //Cambia el dropdown-toggle
            // document.getElementsByClassName("ng-binding")[6].innerHTML="144p";//Cambia el dropdown-toggle
            last_time = checkTotalTime();
        }
    }, 1);
}


window.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        createCookie("state", "paused", 1);
    } else if (e.keyCode == 32 && ) {

    }
}, false);