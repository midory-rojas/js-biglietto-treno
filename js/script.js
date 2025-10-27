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
const scontoPerMenori = 20;
const scontoPerOver = 40;
const prezzoPerKm = 0.21;

// Altri < 65 - 18 = nessuno sconto


//Dati da raccogliere
const kmViaggioInput = prompt("Quanti chilometri vuoi percorrere?");
const kmViaggio = parseInt(kmViaggioInput);
console.log(kmViaggio)

const etaInput = prompt("Quanti anni hai?");
const eta = parseInt(etaInput);
console.log(eta)

//Esecuzione logica

/*Calcolare il prezzo base */
let prezzoBase = km * prezzoPerKm;
let prezzoFinale;

/* Applicare gli sconti */



//Stampa del risultato