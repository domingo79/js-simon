/*
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
/*
schema riassuntivo per le task
1. generare 5 numeri casuali
2. mostrare all'utente i numeri generati
3. fare partire un countdown per l'utente
4 passati i 30 sec l'utente deve inserire i numeri uno alla volta
5. verificare i numeri indovinati
*/


//1- array dei 5 numeri casuali ottenuti da una funzione max min e controllo con ciclo while 

var numeriCasuali = [];

function numeroRandomn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while (numeriCasuali.length < 5) {

    var numero = numeroRandomn(1, 10)

    if (!numeriCasuali.includes(numero)) {
        numeriCasuali.push(numero);
    }
}
console.log('Numeri generati random: ' + numeriCasuali);

//2- mostrare all'utente i numeri generati
alert(`Prova a ricordare i numeri, 
quando sarai pronto, fai click su OK.. 
Inserisci i numeri uno alla volta...
ECCO I NUMERI: => ${numeriCasuali} <=
RICORDATI CHE HAI 30 SECONDI`)

//3-fare partire un countdown per l'utente
var secondi = 5;
var countDownEle = document.getElementById('countDown');

var intervallo = setInterval(function () {

    if (secondi === 0) {
        alert('Tempo scaduto... :-((');
        clearInterval(intervallo);
    }
    else {
        secondi--;
    } countDownEle.innerHTML = secondi;

}, 1000);

//4- passati i 30 sec l'utente deve inserire i numeri uno alla volta tramite prompt()

var numeriUtente = [];

while (numeriUtente.length < 5) {
    var numeroInserito = parseInt(prompt('inserisci il primo numero..'));
    numeriUtente.push(numeroInserito);
}

console.log('numeri inseriti dall\'utente ' + numeriUtente);