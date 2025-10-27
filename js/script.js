/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Prima di scrivere il codice impostate il ragionamento nei commenti!

Bonus:
Applicare dei controlli sull'input dell'utente */

//Dati a disposizione
const scontoPerMenori = 20; // questa variabile PUò essere MODIFICATA
const scontoPerOver = 40; // questa variabile RIMMARRA SEMPRE COSI
const prezzoPerKm = 0.21; // decimal

// Altri < 65 - 18 = nessuno sconto

//Dati da raccogliere
const kmViaggioInput = prompt("Quanti chilometri vuoi percorrere?"); // string
const kmViaggio = parseInt(kmViaggioInput); // number

console.log(kmViaggio);

const etaInput = prompt("Quanti anni hai?"); // string
const eta = parseInt(etaInput); // number
console.log(eta);

//Esecuzione logica

/*Calcolare il prezzo base */
let prezzoBase = kmViaggio * prezzoPerKm; // decimal
let prezzoFinale;// decimal

/* Applicare gli sconti */

if (eta < 18) {
    prezzoFinale = prezzoBase * 0.8;  // sconto 20% decimal
} else if (eta > 65) {
    prezzoFinale = prezzoBase * 0.6; // sconto 40% decimal
} else {
    prezzoFinale = prezzoBase; // nessuno sconto decimal
}

//Stampa del risultato
console.log(`Il prezzo del tuo biglietto è € ${prezzoFinale.toFixed(2)}`);