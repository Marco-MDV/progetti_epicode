/* ex:1 */
function crazySum(num1, num2) {

    if (num1 == num2) {
        console.log((num1 + num2) * 3);
    } else if (num1 != num2) {
        console.log(num1 + num2);
    } else {
        'NaN'
    }
}
crazySum(8,9)

/* ex:2 */
function boundary(x) {
    
    function isInteger(value) {
        return Number.isInteger(value);
    }
    if (isInteger(x)) {
        if (x > 19 && x < 101 || x == 400) {
            console.log('il numero: ' + x + ' è un numero valido!');
        } else {
            console.log('numero non valido');
        }
    } else {
        console.log("Il numero non è un intero");
    }
}
boundary(40.1)

/* ex:3 */

function reverseString(x) {

    /* metodo only stinga */
    let z = "";

    for (let i = x.length - 1; i >= 0; i--) {
        z += x.charAt(i)
    }
    console.log(z);

    /* metodo con l'array
    let x = 'EPICODE'; 
    let y = x.split("").reverse();
    console.log(y); */
}
reverseString('EPICODE')

/* ex:4 */
function upperFirst(x) {
    let z = x.charAt(0);
    let y = x.slice(1);
    let fraseCompleta = z.toUpperCase() + y;

    console.log(fraseCompleta);
}
upperFirst('epicode')

/* ex:5 */
function giveMeRandom(n) {
    let arrayrandom = [];
    for (let i = 0; i < n; i++) {
        let j = Math.floor(Math.random() * 11);
        arrayrandom.push(j)
    }
    console.log(arrayrandom);
}
giveMeRandom(4)

/* ex:1 bonus */
function area(l1,l2) {
    console.log(area = l1 * l2);
}
area(2,2)

/* ex:2 bonus */

function crazyDiff(valoreDato) {
    let valoreFisso = 19;
    let differenzaAssoluta = Number(valoreDato) - Number(valoreFisso);

    if (differenzaAssoluta > valoreFisso) {
        console.log(differenzaAssoluta * 3);
    } else {
        console.log(differenzaAssoluta);
    }
} crazyDiff(39)

/* ex:3 bonus */

function codify(stringa) {
    if (stringa.startsWith("code")) {
        console.log(stringa);
    } else {
        console.log('code ' + stringa);
    }
} codify("banana")

/* ex:4 bonus */


function check3and7(valoreDato) {

    function isInteger(value) {
        return Number.isInteger(value);
    }

    if ((isInteger(valoreDato) === true) && (Math.sign(valoreDato) === 1)) {
        switch (valoreDato) {
            case valoreDato % 3 || valoreDato % 7:
                console.log(true);
                break;
            default:
                console.log(false);
                break;
        }
    }
}check3and7(3)

/* ex:5 bonus */

function cutString(stringa){
    let z = stringa;
    let y= z.slice(1,-1);
    console.log(y);
}cutString('ciao')




