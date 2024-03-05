function numberOne(num1, num2) {
    if ((num1 === 50) || (num2 === 50)) {
        console.log(true);
    } else if ((num1 + num2) === 50) {
        console.log(true);
    } else {
        console.log('try again');
    }
} numberOne()


function numberTwo(str, value) {
    if (value > 0) {
        console.log(str.slice(0, value) + str.slice(value + 1));
    } else {
        console.log("i can't");
    }
} numberTwo()


function numberThree(num1, num2) {
    if ((num1 >= 40) && (num2 <= 60)) {
        console.log(true);
    } else if ((num1 >= 70) && (num2 <= 100)) {
        console.log(true);
    } else {
        console.log('try again');
    }
} numberThree(40, 90)


function numberFour(str) {
    if ((str.toLowerCase().slice(0, 3) === 'los') || (str.toLowerCase().slice(0, 3) === 'new')) {
        console.log(str);
    } else {
        console.log(false);
    }
} numberFour('LOS Napoli')

function numberFive(array) {
    let x = 0;
    array.forEach(element => {
        x += element
    });
    console.log(x);
} numberFive(array = [1, 2, 3])


function numberSix(array) {
    if (array.some(num => num === (1 || 3))) {
        console.log(false);
    } else {
        console.log(true);
    }
} numberSix(array = [2, 4, 8])


function numberSeven(str, num) {

    /* nel caso di stringa da parte di un utente */
    if (Number(str.match(/\d+/)[0]) < 90) {
        console.log('acuto');
    } else if (Number(str.match(/\d+/)[0]) > 90 && Number(str.match(/\d+/)[0]) < 180) {
        console.log('ottuso');
    } else if (Number(str.match(/\d+/)[0]) === 90) {
        console.log('retto');
    } else if (Number(str.match(/\d+/)[0]) === 180) {
        console.log('piatto');
    }


    /* nel caso di numero da parte di un utente */
    if (num < 90) {
        console.log('acuto');
    } else if (num > 90 && num < 180) {
        console.log('ottuso');
    } else if (num === 90) {
        console.log('retto');
    } else if (num === 180) {
        console.log('piatto');
    }

} numberSeven('85°', 90)

function numberEight(str) {
    const z = str.split(' ')
    let x = []
    if (z.some(space => space.trim() === "")) {
        console.log("you can't put only space, pls try again :)");
    }else{
        str.toLowerCase().split(" ").forEach(element=>{
            x.push(element.slice(0,1))
        })
        console.log(x.join('').toUpperCase());
    }
} numberEight('Marco De Vincentiis')


/* plus */

function plusOne(str){

    const x = str.split(' ')
    console.log(x);
    

}plusOne('io sono il carattere più usata')