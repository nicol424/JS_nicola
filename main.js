//Creare 5 variabili contenenti un numero, scrivere un programma in modo da ottenere la somma tra questi numeri e la media. In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta... 


// let num1 =30;
// let num2 =10;
// let num3 =20;
// let num4 =40;
// let num5 =50;
// let somma = num1 + num2 + num3 + num4 + num5;
// let media = somma/5
// console.log(somma); 
// console.log(media);
// console.log(`La somma tra i numeri equivale a ${somma} e la media risulta ${media}`);


// Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console: l’età della persona, quanti anni sono necessari per raggiungere i 100 e stampi in console la frase: "Hai 26 anni e ti mancano 74 anni per compierne 100

// let corrente = 2024;
// let nascita = 2000;
// let età = corrente - nascita;
// let cento = 100 - età;
// console.log(`Hai ${età} anni e ti mancano ${cento}  anni per compierne 100`);

//  a) Un numero totale di gatti (44) 

// b) Il numero dei gatti presenti in ogni fila (6) 

// Restituisca in output: 

// Il numero di file risultanti indicare il numero di gatti mancanti per completare una nuova fila Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

// let totcats = 44;
// let rowcats = 6;
// console.log(`ci sono ${Math.floor(totcats / rowcats)} file di gatti e ne mancano ${ rowcats -(totcats % rowcats)} con il resto di ${ totcats % rowcats}`);

// ESERCITAZIONE JS 18/01
// ESERCIZIO 1
// Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// -se v e’ minore di 18,  stampare in console  “insufficiente”
// -se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// -se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// -se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// -se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// -se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:

// let v = 29;

// Output: Ottimo

// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

//! ESERIZIO N.1

// let voto = 1 ; 


// if (voto > 0 && voto < 18){
//     console.log("bocciato");
// } else if ( voto >= 18 && voto <= 21) {
//     console.log("sufficiente");

// } else if ( voto >= 21 && voto <=25) {
//     console.log("buono");

// } else if ( voto >= 26 && voto <=29) {
//     console.log("ottimo");

// } else if ( voto == 30){
//     console.log("Eccellente");
// }
// else{
//     console.log("questo voto non esiste");
// }
// ! SWITCH CASE

// let color= "verde";


// switch (case (color)){
//     case "verde":
//         console.log("colore scelto: verde");
// break;

// default;
// console-log("colore non corrisponderte");
// break;
// }


//! FINE ESERIZIO N.1

// ESERCIZIO 2
//  Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:

// -se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// -se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// -se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// -se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// -se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”

// Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.

    //? ESERIZIO N.2

// const temperature = -10
// switch (temperature){
//     case 20:
//         console.log("non ci sono più le mezze stagioni");
//         break;
//     case -10:
//         console.log("copriti, è freddù");
//         break;
//     case 30:
//             console.log("mi dia una peroni sudata");
//             break;
//             default:
//                 console.log("questo numero è una stringa");
// }

    //? FINE ESERIZIO N.2
        // * ESERCIZIO N.3
//     Scrivere un programma che simuli un distributore di bevande:

// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato)

// PS: Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!


// let bevanda = "3";
// let age = "22";

// if (bevanda == 1){
//         console.log("è stata selezionata l'acqua");
//     } else if (bevanda == 2) {
//         console.log("è stata erogata la coca cola");
    
//     } else if (bevanda == 3) {
//         if (age >= 18 ) { 
//             console.log("è stata selezionata la birra");
//         }  else {
//             console.log("sei minorenne, non puoi bere");
//         }

//     } else{
//         console.log("questa bevanda non è disponibile");
//     }

// * FINE ESERCIZIO N.3
// ESERCITAZIONE DEI DATI
// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
//  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
//  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore
// Math.floor(Math.random() * (max - min + 1) + min);
// Buon lavoro 🚀

// alert("tira il player 1")
// let point1 = 0;
// let tiri = 3;

// for (let i =1; i <= i++ )  {
//     point1 = point1 + Math.floor(Math.random) * (6 - 1 + 1) + 1;
// }
// alert(`il pinteggio finale è ${point1}`)

// alert ("tira il player 2");
// let point2 = 0;

// for (let i = 1; i <= TransitionEvent; i++) {
//     point2 = point2 + Math.floor(Math.random) * (6 - 1 + 1) + 1;
// }
// alert= (`il punteggio finale è ${point2}`)

// if(point1>point2) {
//     alert("ha vinto il player 1");
//     }  else {
//         alert("ha vinto il player 2")
//     }

// ESERCIZIO EXTRA N.1
// **Esercizio 1:**
// Scrivi un programma che stampi numeri da 1 a 50. Per i multipli di 3, stampa "Fizz" al posto del numero. Per i multipli di 5, stampa "Buzz". Per i numeri che sono sia multipli di 3 che di 5, stampa "FizzBuzz".

// for (let i = 1; i <= 50; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");    
//     }  else if (i % 5  === 0) {
//         console.log("Buzz");
//     } else { console.log(i);}
// }


// ESERCIZIO EXTRA N.2
// **Esercizio 2:**
// Crea un programma che calcoli la somma dei quadrati dei numeri dispari compresi tra 1 e 10 usando un ciclo for.

// let counter = 0

// for (let i= 1; i <= 10; i++) {
//     if (i % 2 != 0) {
//         counter += i*i
//         console.log(counter);
//     }
// }

// ESERCIZIO EXTRA N.3
// **Esercizio 3:**
// Crea un programma che stampi la sequenza di numeri di Fibonacci fino al 15° termine. Per i numeri pari, stampa "Even", altrimenti stampa "Odd".

// let a = 0
// let b = 1 
// let c

// for (let i= 0; i <= 15; i++) {
//     c= a + b;
//     a = b;
//     b = c;
//     if (c % 2 === 0) {
//         console.log("Even", c);
//     }
//     else{console.log("Odd", c);}
// }

// ESERCIZIO EXTRA N.4
// **Esercizio 4:**
// Crea un programma che stampi i primi 10 numeri primi utilizzando un ciclo while.

// let voto = ;

// if (voto >= 1 && voto <= 18) {
//     console.log("Sei bocciato");
// }  
// else if (voto > 18 && voto <= 30) {
//     console.log("Sei promosso");
// }
// else {
//     console.log("questo voto non esiste");
// }

//? ESERCITAZIONE 22/01

// Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.

// HINT: COME SI AGGIUNGE UN ELEMENTO ALLA FINE DI UN ARRAY?

// Esempio: Input= 5 Output= [5, 9, 1, 6, 10]
//? ESERCIZIO 1

// function generaNumeri(n) {
//     let numeriCasuali = [];
//     for (let i = 0; i < n; i++) {
//          let numeroCasuale = Math.floor(Math.random() * 10) + 1;
//         numeriCasuali.push(numeroCasuale);
//     }

//     return numeriCasuali; 
// }

// let numeroDiNumeri = 8;
// let arrayDiNumeriCasuali = generaNumeri(numeroDiNumeri);

//     console.log("Array di numeri casuali:", arrayDiNumeriCasuali);

//! ESERCIZIO 2

// Metti un po' d'ordine

// Scrivi una funzione che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

//  Esempio:

//  Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

//  Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

// function riordinaDecrescente(array) {
//     array.sort(function(a, b) {
//         return b - a;
//     });
// }
// let arrayDiNumeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// console.log(arrayDiNumeri);
// riordinaDecrescente(arrayDiNumeri);
// console.log(arrayDiNumeri);

//* ESERCIZIO 3

// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.



//  Esempi:

//  Input : 9

//  Output : 1 cifra


//  Input : 99

//  Output : 2 cifre

// function countArray(numero) {
//     if (numero < 0 || numero > 9999 || isNaN(numero) || !Number.isInteger(numero)) {
//         return "Input non valido";
//     }

//     let numArray = numero.toString().split('');

//     return numArray.length + " cifre";
// }

// console.log(countArray(8));  
// console.log(countArray(69)); 
// console.log(countArray(134));
// console.log(countArray(8769));
// console.log(countArray(-5));  

// *ESERCIZIO 4*

// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,

//  FALSE altrimenti.

//  **Esempi:**

//  Input: n = 2, m = 3

//  Output: FALSE



//  Input: n = 2, m = '2'

//  Output: FALSE


//  Input: n = 2, m = 2

//  Output: TRUE 

// function ciao(num1, num2) {
//     return num1 === num2;
// }

// console.log(ciao(2, 3));
// console.log(ciao(2, "2"));
// console.log(ciao(2, 2));

// ESERCIZIO 5

// Scrivi una funzione che dato un numero stampi la tabellina corrispondente.

// function tabellina (numero) {
//     if (!Number.isInteger(numero)) {
//         console.log("Input non valido. Inserisci un numero intero.");
//         return;
//     }
//     console.log(`Tabellina del ${numero}:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }
// tabellina(8);

// function tabellina(num) {
//     if (!Number.isInteger(num)) {
//         console.log("numero non valido. Inserisci un numero intero.");
//         return;
//     }
//     console.log(`Tabellina del ${num}`);
//     for (let i = 0; i <= 20; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }
// tabellina(7);

// **ESERCIZIO 6**

// Scrivi due funzioni: 
// dato un array: let numbers = [10, 12, 78, -4, -20, 11]; 
// una che prenda in input un array di numeri e restituisca il maggiore,
// l'altra che restituisca il minore. Suggerimento utilizzare Math.max() e Math.min(); 

// let numbers = [10, 12, 78, -4, -20, 11];

// function findMax(array) {
//     if (array.length === 0) {
//         console.log("L'array è vuoto.");
//         return;
//     }

//     let massimo = Math.max(...array);
//     return massimo;
// }

// function findMin(array) {
//     if (array.length === 0) {
//         console.log("L'array è vuoto.");
//         return;
//     }

//     let minimo = Math.min(...array);
//     return minimo;
// }

// let massimo = findMax(numbers);
// let minimo = findMin(numbers);

// console.log("Il numero massimo nell'array è:", massimo);
// console.log("Il numero minimo nell'array è:", minimo);

// **ESERCITAZIONE SUI METODI DEGLI ARRAY**

// **ESERCIZIO 1:**

// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. Esempio: let array = [1, 5 ,7 ,12]; Output = 25;

// let numbers = [1, 5, 7, 12];
// function somma (array) {
// let sum = array.reduce((acc, number )=> acc + number) 
// return sum
// }
// somma(numbers);
// console.log(somma(numbers));




// **ESERCIZIO 2:**

// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media. Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2]

// function mediaEValoriMinori(array) {
    // Calcola la media
//     const media = array.reduce((acc, valore) => acc + valore, 0) / array.length;
  
    // Trova i valori minori della media
//     const valoriMinori = array.filter(valore => valore < media);
  
    // Restituisce la media e i valori minori
//     return { media, valoriMinori };
//   }
  
  // Esempio di utilizzo
//   const arrayInput = [3, 5, 10, 2, 8];
//   const { media, valoriMinori } = mediaEValoriMinori(arrayInput);
  
  // Stampare i risultati
//   console.log("Input:", arrayInput);
//   console.log("Media:", media);
//   console.log("Valori minori della media:", valoriMinori);

// let numbers = [1, 5, 7, 12];
// function somma (array) {
// let sum = array.reduce((acc, number )=> acc + number/5) 
// return sum
// }
// somma(numbers);
// console.log(somma(numbers));

// **ESERCIZIO 3:**

// Scrivi un programma che dati  2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 

// addizione

// sottrazione 

// moltiplicazione 

// divisione

// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

// **ESERCIZIO 4: **

// Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array:

// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]

// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

// **HINT:** provate a filtrare in base al tipo di dato (operatore typeof)

// let mixArray= [[1, true, 'hackademy', 100, Javascript, false, null, 'php']];


// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length >= 5);
// console.log(words);





// **EXTRA:**

//  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

// **Nel controllo scarta gli spazi e i segni di punteggiatura**

//   Esempio:

//   Input: “i topi non avevano nipoti”

//   Output: TRUE

// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando:
// str.replace(/W/g, "")


// Spacchettate l 'esercizio in problemi più piccoli, e cercando su internet, trovate i metodi che vi servono!
 

// function isPalindroma(stringa) {
//     // Rimuovi spazi e segni di punteggiatura dalla stringa
//     const stringaPulita = stringa.replace(/[^\w]/g, '').toLowerCase();
  
//     // Verifica se la stringa pulita è uguale al suo inverso
//     return stringaPulita === stringaPulita.split('').reverse().join('');
//   }
  
//   // Esempio di utilizzo
//   const input = "i topi non avevano nipoti";
//   const output = isPalindroma(input);
  
//   // Stampare il risultato
//   console.log(`Input: "${input}"`);
//   console.log("Output:", output);
  
//? ESERCITAZIONE 24/01
// calcolare l'aria di un cerchio di raggio = 10

// let raggio = 10;
// let pi =3.14;

// let area = pi * raggio ** 2

// console.log(area);

// function areaCerchio(raggio) {
//     return Math.PI * raggio ** 2
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(areaCerchio(i));
    
// }

// calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4.

// let latoCorto = 3;
// let latoLungo = 4;

// let Ipotenusa = Math.sqrt(latoCorto**2 + latoLungo**2);
// console.log(Ipotenusa);

// function pitagora(LatoCorto, LatoLungo) {
//     return Math.sqrt(LatoCorto**2 + LatoLungo**2);
// }
// console.log(pitagora(3, 4));

// scrivere una funziona che assegni due numeri, che generi un numero random, intero, fra i due assegnati (compresi).

// function randomico(min, max) {
//    return Math.round(Math.random()*(max-min)+min)

// scrivere una funzione che trasformi un nome nelle sue iniziali. esempio "Tizio Caio" --> "T C"

// function init(stringa) {
//     return stringa.split(" ").map( el => el[0] +".").join("")
// }
// console.log(init("Tizio Caio"));

// }
// console.log(randomico(3, 9));
// scrivere una funzione che, assegnati tre numeri, ritorni true se i tre numeri possono essere i lati di un triangolo, false altrimenti.

// function èTriangolo(a, b, c) {
//     let primo = ( a > Math.abs(b-c)) && ( a < (b+c) )
//     let secondo = ( b > Math.abs(a-c)) && (b < (a+c) )
//     let terzo = ( c > Math.abs(a-b)) && (c < (a+b) )
//     return primo && secondo && terzo
// }
// console.log(èTriangolo(3, 4, 5));

// function colcatz(num) {
//     let arr =[num]
//     while(num > 1){
//         if (num % 2 == 0) {
//             num = num / 2
//         } else {
//             num = 3 * num +1
//         }
//         arr.push(num)
//     }
//     return arr

// }
// console.log(colcatz(10));
// console.log(colcatz(32));

// scrivere uj programma che stampi i numeri da 1 a 100: per i multipli di 3 stampare "JAVA" (al posto del numero), per i multipli di 5 stampare "SCRIPT". Infine per i numeri multipli di 3 e 5 stampare invece "JAVASCRIPT"

// for (let i = 1; i <= 100; i++) {

//     if( i % 15 == 0) {
//         console.log("Javascript");
//     } else if ( i % 3 == 0) {
//         console.log("Java");
//     } else if (i % 5 == 0) {
//         console.log("script");
//     }  else {
//         console.log(i);
//     }
// }

// scrivi una funzione che, assegnato un numero, tirorni in successione di Fibonacci fino all' n-esimo numero sotto forma di array. Ad esempio: 3 => [1, 1, 2, 3, 5, 8, 13, 21, 34];

// function fibonacci(n){
//     let final =[1, 1]

//     for (let i = 2; i < n; i++) {

//         final.push(final[i-2] + final[i-1])
//     }

//     return final
// }
//  console.log(fibonacci(10));

// scrivere una funzione che, assegnato un numero n, tirorni se è primo.

// function isPrime(n) {
    
//     if(n == 1) return false
//     if(n == 2) return true

//     for (let i = 2; i < n; i++) {
        
//         if (n % i == 0) return false 
//     }

//     return true
// }
// console.log(isPrime(17));
// console.log(isPrime(172));

// scrivere una funzione che, assegnando una stringa, ritorni la somma delle cifre in essa presenti. Esempio "sono una stringa di 6 parole => 7"

// function strSum(str) {
//     return str.split("").filter( el => Number(el)).map( el => Number(el)).reduce((t,n) => t+n)
// }
// console.log(strSum("sono 1 stringa di 3 parole"));

// scrivi una funzione che accetta come parametri un array di numeri ed un numero di soglia, e restituisca un array formato dai numeri maggiori della soglia fornita. Ad esempio ([1,2,3,4],3) => [4]

// function over(array, soglia) {
//     return array.filter( el => el > soglia)
// }
// console.log(over([1,2,3,4],3));

// function orologio(num) {
    
//     let ore = Math.floor(num / 60)
//     if (ore < 10) ore = "0"  + ore 

//     let minuti = num % 60
//     if (minuti < 10) ore = "0"  + minuti 

//     return `${ore} : ${minuti}`
// }

// console.log(orologio());

// scrivi una funzione che generi un array formato di N numeri interi random, fra un minimo ed un massimo assegnati

// function randomArray (n, min, max) {
//     let final = []
//     for (let i = 0; i < n; i++) {
//         final.push(Math.round(Math.random()*(max-min)+min))
        
//     }
//         return final
// } 
// console.log(randomArray(10,1,5));

