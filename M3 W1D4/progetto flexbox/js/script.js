const main = document.querySelector('main')

const sectionInfo = document.createElement('section')
sectionInfo.classList.add('sectionDescription')
main.appendChild(sectionInfo)

function description() {

    /* parte testuale */

    const containerBio = document.createElement('div')
    containerBio.classList.add('containerBio')


    const titleDescription = document.createElement('h2')
    titleDescription.classList.add('titleDescription')
    titleDescription.textContent = 'Lorem, ipsum dolor.'


    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam neque rem, asperiores suscipit perspiciatis alias placeat accusamus deleniti nam! Repudiandae maxime fuga, excepturi enim similique recusandae, accusamus voluptatibus, odit aliquid illum fugit atque sequi consequatur magnam officia consectetur sed sapiente molestiae voluptatem. Quos officia id quis, cupiditate fuga fugit?'


    /* parte img */

    const figureImgHoney = document.createElement('figure')
    figureImgHoney.classList.add('figureImgHoney')

    const imgHoney = document.createElement('img')
    imgHoney.src = "./S1P2-Esercizi-Flex-Assets/honey.jpg"
    imgHoney.classList.add('imgHoney')

    figureImgHoney.appendChild(imgHoney)

    /* parte collegamenti */

    containerBio.append(titleDescription, description)
    sectionInfo.append(containerBio, figureImgHoney)

} description()


function pressButtonForStory() {
    const story = document.querySelector('.story')

    story.addEventListener('click', () => {
        sectionInfo.innerHTML = ''
        description()
    })

} pressButtonForStory()


function card() {

    const containerCard = document.createElement('div')
    containerCard.classList.add('containerCard')
    sectionInfo.appendChild(containerCard)


    /* img item */
    const figureImgHoneyCard = document.createElement('figure')
    figureImgHoneyCard.classList.add('figureImgHoneyCard')

    const ImgHoneyCard = document.createElement('img')
    ImgHoneyCard.src = "./S1P2-Esercizi-Flex-Assets/honey.jpg"
    ImgHoneyCard.classList.add('ImgHoneyCard')

    figureImgHoneyCard.appendChild(ImgHoneyCard)

    /* description */

    /* section right */

    const sectionLeft = document.createElement('div')

    const titleItem = document.createElement('h3')
    titleItem.classList.add('titleItem')
    titleItem.textContent = '100% Bio Honey'

    const descriptionItem = document.createElement('p')
    descriptionItem.classList.add('descriptionItem')
    descriptionItem.textContent = 'Italian, not treated'

    sectionLeft.append(titleItem, descriptionItem)

    /* section right */

    const sectioRight = document.createElement('div')

    const price = document.createElement('p')
    price.classList.add('price')
    price.textContent = '7$/kg'

    sectioRight.appendChild(price)

    /* conatiner description */
    const conatinerDescriptionItem = document.createElement('div')
    conatinerDescriptionItem.classList.add('conatinerDescriptionItem')
    conatinerDescriptionItem.append(sectionLeft, sectioRight)

    /* button */

    const buttonForBuy = document.createElement('button')
    buttonForBuy.classList.add('buttonForBuy')
    buttonForBuy.textContent='Add to cart'

    containerCard.append(figureImgHoneyCard, conatinerDescriptionItem, buttonForBuy)
}


function pressShop() {
    const shop = document.querySelector('.specialButton')

    shop.addEventListener('click', () => {
        sectionInfo.innerHTML = ''
        card()
    })
}pressShop()