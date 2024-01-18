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


let bevanda = "3";
let age = "22";

if (bevanda == 1){
        console.log("è stata selezionata l'acqua");
    } else if (bevanda == 2) {
        console.log("è stata erogata la coca cola");
    
    } else if (bevanda == 3) {
        if (age >= 18 ) { 
            console.log("è stata selezionata la birra");
        }  else {
            console.log("sei minorenne, non puoi bere");
        }

    } else{
        console.log("questa bevanda non è disponibile");
    }




// * FINE ESERCIZIO N.3