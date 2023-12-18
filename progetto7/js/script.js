/* ESERCIZIO 1 */
let valore1 = 2;
let valore2 = 1;

if (valore1 > valore2) {
    console.log('il valore: ' + Number(valore1) + ' è il più grande di: ' + Number(valore2));
} else if (valore1 < valore2) {
    console.log('il valore: ' + Number(valore1) + ' è più piccolo di: ' + Number(valore2));
} else if (valore1 == valore2) {
    console.log('il valore: ' + Number(valore1) + ' è ugaule a: ' + Number(valore2));
} else {
    console.log('perfavore inserire inserisi dei valori validi');
}

/* ESERCIZIO 2 */
let valore = 1;

if (valore < 5) {
    console.log('Tiny');
} else if (valore >= 5 && valore < 10) {
    console.log('Small');
} else if (valore >= 10 && valore < 15) {
    console.log('Medium');
} else if (valore >= 15 && valore < 20) {
    console.log('Large');
} else if (valore >= 20) {
    console.log('Huge');
} else {
    console.log('input non valido perfare riprova.');
}

/* ESERCIZIO 3 */
/* caso con il statement continue */

/* let contineCase="";

for (i = 0; i <= 10; i++){
    if (i === 3){
        continue;
    }else if (i === 5){
        continue;
    }
    contineCase = contineCase + i;
}
console.log(contineCase); */

/* caso alternativo */

/* for (i = 0; i <= 10; i++) {
    if (i != 3 && i != 5) {
        console.log(i);
    };
} */

for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8){
        continue;
    }
    else console.log(i);
}



/* ESERCIZIO 4 */
for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' Pari');
    } else {
        console.log(i + ' Dispari');
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1 */

let valoreUno = 4;
let valoreDue = 4;

if (valoreUno === 8 || valoreDue === 8) {
    console.log('Uno dei due numeri è otto');
} else if (valoreUno + valoreDue === 8) {
    console.log('La sommando dei due numeri è 8');
} else if (valoreUno - valoreDue === 8) {
    console.log('La sotrazione dei due numeri è 8');
} else {
    console.log("Non è possibile generare l'otto, riprova!");
}


/* ESERCIZIO EXTRA 2 */

let totalShoppingCart = 49;
let spedizioneBase = 10;

if (totalShoppingCart > 50) {
    console.log('ti sei meritato la spedizione gratuita, il totale del tuo pagamento è: ' + totalShoppingCart);
} else {
    console.log('grazie di aver speso nel nostro store, il totale del tuo pagamento è: ' + (totalShoppingCart + spedizioneBase));
}

/* ESERCIZIO EXTRA 3 */

let totalShoppingCartEx3 = 70;
let spedizioneBaseEx3 = 10;

let calcoloPercentuale = totalShoppingCartEx3 - (0.2 * totalShoppingCartEx3);

if (calcoloPercentuale > 50) {
    console.log('ti sei meritato la spedizione gratuita, il totale del tuo pagamento è: ' + calcoloPercentuale);
} else {
    console.log('grazie di aver speso nel nostro store, il totale del tuo pagamento è: ' + calcoloPercentuale);
}

/* ESERCIZIO EXTRA 4 da rifare meglio*/

let isMale = true;
let gender = isMale == true ? 'nice you are male' : 'okay you are a female';
console.log(gender);

/* ESERCIZIO EXTRA 5 */

for (i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }

}