/*
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//task 1- array dei 5 numeri casuali ottenuti da una funzione max min e controllo con ciclo while 

var numeriCasuali = [];
var numeriUtente = [];
var secondi = 3;
var countDownEle = document.getElementById('countDown');


function numeroRandomn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while (numeriCasuali.length < 5) {

    var numero = numeroRandomn(1, 50)

    if (!numeriCasuali.includes(numero)) {
        numeriCasuali.push(numero);
    }
}

//task 2- mostrare all'utente i numeri generati

alert(`Prova a ricordare i numeri,
quando sarai pronto, fai click su OK..
Ti lascerò riflettere per alcuni secondi...
ECCO I NUMERI: => ${numeriCasuali} <=
Ti chiederò di inserire i numeri a breve..`)

//task 3-fare partire un countdown per l'utente

var intervallo = setInterval(function () {

    if (secondi === 0) {
        alert('Pronto?? ricordi i numeri? Inserisci i numeri uno per volta..');
        clearInterval(intervallo);
    }
    else {
        secondi--;
    } countDownEle.innerHTML = secondi;

}, 1000);

//task 4- passati i 30 sec l'utente deve inserire i numeri uno alla volta tramite prompt()

setTimeout(function () {
    while (numeriUtente.length < 5) {
        var numeroInserito = parseInt(prompt('Inserisci il numero..'));
        numeriUtente.push(numeroInserito);
    }
    //task 5 verificare i 2 array
    var numeriIndovinati = [];

    for (var i = 0; i < 5; i++) {
        var elemento = numeriUtente[i];
        if (numeriCasuali.includes(elemento)) {
            numeriIndovinati.push(elemento)
        }

    }
    document.getElementById('winLose').innerHTML = `Hai indovinato ${numeriIndovinati.length}/di 5 numeri... ${numeriIndovinati}`;


}, 4000);







