/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const vocaliNellaParola = (vocali) => {
  for (let i = 0; i < 10; i++) {
    if (vocali[i] === "a" || vocali[i] === "i") {
      console.log(`(${vocali[i]})`);
    }
  }
  return vocali;
};

// Invoca la funzione qui e stampa il risultato in console
vocaliNellaParola(word);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
