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
} numberTwo('ciao',1)


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
} numberFive([1, 2, 3])


function numberSix(array) {
    if (array.some(num => num === (1 || 3))) {
        console.log(false);
    } else {
        console.log(true);
    }
} numberSix([2, 4, 8])


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
    } else {
        str.toLowerCase().split(" ").forEach(element => {
            x.push(element.slice(0, 1))
        })
        console.log(x.join('').toUpperCase());
    }
} numberEight('Marco De Vincentiis')

/* plus */

function plusOne(str) {
    let lettereArray = str.toLowerCase().split(' ').join('').split('')

    const recursività = {};
    let elementRipetuto = []
    let numRipetuto = 0

    lettereArray.map((lettera) => {
        if (!recursività.hasOwnProperty(lettera)) {
            recursività[lettera] = 0
        }
        recursività[lettera]++
    })


    for (const lettera in recursività) {
        if (recursività[lettera] > numRipetuto) {
            elementRipetuto.length = 0;
            numRipetuto = recursività[lettera];
        }
        if (recursività[lettera] === numRipetuto) {
            elementRipetuto.push(lettera);
        }
    }

    console.log('elementi ripetuti sono:' + elementRipetuto);
    console.log('si ripete:' + numRipetuto);
} plusOne('proviamo con una "o" in più')

const plusTwo = (str1,str2) =>{
    let arraystr2=str2.replace(/[^\w]/g,'').toLowerCase().split(' ').join('').split('')
    let str1Mod = str1.replace(/[^\w]/g,'').toLowerCase()
    let count = 0;
    /* console.log(arraystr2); */
    arraystr2.forEach(element => {
        /* console.log(element); */
        const value = str1Mod.search(element)
        if(value >= 0){
            count++
        }else if(value < 0){
            count--
        }
    });
    if (count === str1Mod.length) {
        console.log(true);
    }else{
        console.log(false);
    }
}
plusTwo('oaic','ciao')


const plusThree = (str) =>{
    return str.toLowerCase().split('').sort().join('')
}

const findAnagram = (str, possibleAnagram) =>{
    const orderString = plusThree(str)
    const correctAnagrams = possibleAnagram.filter((anagram)=>{
        return plusThree(anagram) === orderString
    })
    return correctAnagrams
}
const word1='cane'
const possibleAnagrams = [
    'cane',
    'cane!',
    'enac'
]

console.log(findAnagram(word1,possibleAnagrams));

const plusFour = (str) =>{
    const palindrome = str.toLowerCase().split('').reverse().join('')
    if(palindrome === str){
        console.log(true);
    }else{
        console.log(false);
    }
}
plusFour('osso')

const plusFive = (num) =>{
    const palindromeNumber = String(num).split('').reverse().join('')
    console.log(Number(palindromeNumber));
}
plusFive(28)

const plusSix = (num) =>{
    /* salve professore alla fine ho fatto il debug della scala questo è il mio risultato spero le piaccia */
    for (let index = 0; index <= num; index++) {
        if (index > 0) {
            const mattone = document.createElement('p')
            for (let index2 = 0; index2 < (index+1); index2++) {
                const x = '#'.repeat(index2)
                mattone.innerHTML=`<p>${x}</p>`
            }
            document.body.appendChild(mattone)            
        }
    }
    /* questo era il metodo che mi fece vedere */
    if (num<=0) {
            console.log('not pos');
        }
        let htmlScale = ''
        for (let i = 1; i <= num; i++) {
            let scale = '#'.repeat(i)
            console.log(scale);
            htmlScale +=`<p>${scale}</p>`
        }
        const box = document.createElement('div')
        box.innerHTML=htmlScale
        document.body.appendChild(box)
}
plusSix(7)

const plusSeven = (str) =>{
    console.log(str.toLowerCase().split('').reverse().join(''));
}
plusSeven('ciao')

const plusEight=(array,num)=>{
    const size = Math.ceil(array.length/num);
    console.log(Array.from({length:size},(v,i)=>array.slice(i * num,i*num+num)));
}
plusEight([1,2,3,4,5] , 4)

