/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function soloUnaLettera(nomi) {
  let soloLetteraA = [];
  for (let i = 0; i < nomi.length; i++) {
    if (nomi[i][0] === "A") {
      soloLetteraA.push(nomi[i]);
    }
  }
  return soloLetteraA;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(soloUnaLettera(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
