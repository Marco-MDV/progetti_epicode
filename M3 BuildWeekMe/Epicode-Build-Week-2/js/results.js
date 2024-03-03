/* results */
const arrayImg = [
    './assets/1.webp',
    './assets/2.webp',
    './assets/3.webp',
    './assets/4.webp',
    './assets/5.webp'
]


const arrayDescription = [
    'The windy house',
    'Wonderful House',
    'The time travel',
    'S.Olcese dream',
    'Bassi student residence'
]


const arrayValue = [
    0,
    1,
    2,
    3,
    4,
    5
]


function cards() {
    const cardsRow = document.querySelector('.cardsRow')

    for (let index = 0; index < 10; index++) {
        /* colCard */
        const colCard = document.createElement('div')
        colCard.classList.add('col', 'flex-column', 'd-flex', 'justify-content-center', 'align-items-center')
        cardsRow.append(colCard)


        /* contenitore card */
        const cardBnb = document.createElement('div')
        cardBnb.classList.add('cardBnb', 'w-100', 'pb-5')
        colCard.append(cardBnb)

        /* immagine del luogo */
        const figureCard = document.createElement('figure')
        figureCard.classList.add('figureCard')
        const imgPlace = document.createElement('img')
        imgPlace.src = arrayImg[Math.floor(Math.random() * arrayImg.length)]
        imgPlace.classList.add('rounded')
        figureCard.appendChild(imgPlace)

        /* evaluation */

        const containerEvaluation = document.createElement('div')
        containerEvaluation.classList.add('d-flex', 'align-items-center', 'gap-2')

        const icon = document.createElement('div')
        icon.innerHTML = '<ion-icon name="star"></ion-icon>'
        icon.classList.add('d-flex', 'justify-content-center', 'align-items-center')
        const value = document.createElement('p')
        value.innerHTML = '<span>' + arrayValue[Math.floor(Math.random() * arrayValue.length)] + '</span>' + ' &#183; 4 ratings'
        value.classList.add('m-0')

        containerEvaluation.append(icon, value)


        /* parte info */
        const apartament = document.createElement('a')
        apartament.href='./apartment.html'
        apartament.classList.add('mb-0', 'link-dark', 'text-decoration-none')
        apartament.innerHTML = 'Apartment &#183; Genova'
        const description = document.createElement('p')
        description.textContent = arrayDescription[Math.floor(Math.random() * arrayDescription.length)]
        description.classList.add('m-0')

        /* appendo tutti gli elementi */
        cardBnb.append(figureCard, containerEvaluation, apartament, description)
    }
}

cards()