/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/
const tabellone = document.querySelector('#tabellone');
const ultimoNumero = document.querySelector('#ultimo-numero');
const btnEstrai = document.querySelector('#estrai');
const btnReset = document.querySelector('#reset');
const cronologia = document.querySelector('#cronologia');

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/
function rendiTabellone() {
    tabellone.textContent = '';
    for (let i = 1; i <= 90; i++) {
        const numero = document.createElement('div');
        numero.textContent = i;
        tabellone.appendChild(numero);
        numero.classList.add('numero');

    if (usciti.includes(i)) {
    numero.classList.add('uscito');
    }


    }
}

rendiTabellone();

function estrai() {
    if (usciti.length === 90) {
    console.log('Sono stati estratti tutti i numeri!');
    return;
}
    let numeroCasuale = Math.floor(Math.random() * 90) +1;
    while(usciti.includes(numeroCasuale)) {
        numeroCasuale = Math.floor(Math.random() * 90) +1;
    }
    usciti.push(numeroCasuale);
    ultimoNumero.textContent = numeroCasuale;
    rendiTabellone();
    rendiCronologia();
    
    if (usciti.length === 90) {
    ultimoNumero.textContent = 'Sono stati estratti tutti i numeri!';
}
}


btnEstrai.addEventListener('click', estrai);

function rendiCronologia() {
    const ultimiDieci = usciti.slice(-10);
    cronologia.textContent = ultimiDieci.join(',');
}
rendiCronologia();

function reset() {
    usciti = [];
    rendiTabellone();
    ultimoNumero.textContent = '-';
    cronologia.textContent = 'Nessun numero estratto!'
}
btnReset.addEventListener('click', reset);