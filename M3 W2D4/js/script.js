function sectionList() {
    const titleElements = document.querySelectorAll('h2');
    let numTitile = 1;
    const containerList = document.querySelector('.containerList');

    titleElements.forEach(element => {
        const sectionElement = document.createElement('a');
        sectionElement.textContent = element.textContent;
        sectionElement.href = '#title' + numTitile;
        numTitile++
        containerList.append(sectionElement);
    })

} sectionList()

let tot = 0;

function count() {
    const arrayCards = document.querySelectorAll('.card')
    arrayCards.forEach(card => {
        tot++;
    })
    console.log(tot);
} count()

function modale() {
    const modalMDV = document.createElement('div')
    modalMDV.classList.add('modalMDV', 'hideModelMDV')
    document.body.appendChild(modalMDV)

    /* element */
    const titleModel = document.createElement('h2')
    titleModel.textContent = 'Lorem.'
    titleModel.classList.add('text-center')
    const descriptionModel = document.createElement('p')
    descriptionModel.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo incidunt accusantium ipsum ex tenetur aliquam nobis culpa, odio aspernatur quia!'
    descriptionModel.classList.add('text-center')
    const mailBox = document.createElement('input')
    mailBox.classList.add('mailBox')
    mailBox.type = 'email'
    mailBox.placeholder = 'email'
    const button = document.createElement('button')
    button.id = 'close'
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.textContent = 'Close'

    modalMDV.append(titleModel, descriptionModel, mailBox, button)
} modale()


function modaleShow() {
    const contattaci = document.querySelector('#contattaci')
    contattaci.addEventListener('click', () => {
        const modalMDV = document.querySelector('.modalMDV')
        modalMDV.classList.remove('hideModelMDV')
    })
} modaleShow()

function modelClose() {
    const close = document.querySelector('#close')
    close.addEventListener('click', () => {
        const modalMDV = document.querySelector('.modalMDV')
        modalMDV.classList.add('hideModelMDV')
        const mailBox = document.querySelector('.mailBox')
        mailBox.value = ' '
    })
} modelClose()


function removeCard() {
    const clearAll = document.querySelector('#clearAll')

    clearAll.addEventListener('click', () => {
        const arrayCards = document.querySelectorAll('.card')
        arrayCards.forEach(card => {
            card.remove()
        })
    })
} removeCard()