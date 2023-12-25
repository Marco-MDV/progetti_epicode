

function changeH1() {
    const titolo = document.querySelector('h1');
    titolo.addEventListener('click', () => {
        titolo.textContent = 'Buon natale da Amazon2.0'
    })

} changeH1()

function buttonoChangeMode() {
    const body = document.querySelector('body')
    const butto = document.querySelector('button');
    butto.addEventListener('click', () => {
        body.classList.toggle('Black')
    })
} buttonoChangeMode()

function changeStreat(newStret) {
    const stret = document.querySelector('#oldStreat');
    if (newStret === "") {
        stret.textContent = 'Old Main Street School';
    } else {
        stret.textContent = newStret;
    }
} changeStreat('');

function addClassLink() {
    const linkPicture = document.querySelectorAll('.card a')
    linkPicture.forEach(element => {
        element.classList.add('link')
    });
} addClassLink()

function visibilityCards() {
    const imgVisibility = document.querySelectorAll('.card img');
    imgVisibility.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('visibilita');
        })
    });

} visibilityCards()


function changeColor() {
    const color = document.querySelectorAll('.card span')
    color.forEach(element => {
        element.addEventListener('click', () => {
            const prova = ['red', 'green', 'blue', 'yellow']
            const randomcolor = Math.floor(Math.random()*prova.length)
            const randomelement = prova[randomcolor]
            console.log(element.style);
            element.style.color=`${randomelement}`;
        })
    });
} changeColor()



