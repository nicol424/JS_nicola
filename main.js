//Creare 5 variabili contenenti un numero, scrivere un programma in modo da ottenere la somma tra questi numeri e la media. In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta... 


let num1 =30;
let num2 =10;
let num3 =20;
let num4 =40;
let num5 =50;
let somma = num1 + num2 + num3 + num4 + num5;
let media = somma/5
console.log(somma); 
console.log(media);
console.log(`La somma tra i numeri equivale a ${somma} e la media risulta ${media}`);


// Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console: l’età della persona, quanti anni sono necessari per raggiungere i 100 e stampi in console la frase: "Hai 26 anni e ti mancano 74 anni per compierne 100

let corrente = 2024;
let nascita = 2000;
let età = corrente - nascita;
let cento = 100 - età;
console.log(`Hai ${età} anni e ti mancano ${cento}  anni per compierne 100`);

//  a) Un numero totale di gatti (44) 

// b) Il numero dei gatti presenti in ogni fila (6) 

// Restituisca in output: 

// Il numero di file risultanti indicare il numero di gatti mancanti per completare una nuova fila Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

let totcats = 44;
let rowcats = 6;
console.log(`ci sono ${Math.floor(totcats / rowcats)} file di gatti e ne mancano ${ rowcats -(totcats % rowcats)} con il resto di ${ totcats % rowcats}`);
