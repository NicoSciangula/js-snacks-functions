/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function primaLettera(lettera) {
  for (let i = 0; i <= lettera.length; i++) {
    return lettera[i].substring(0, 1);
  }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(primaLettera(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
