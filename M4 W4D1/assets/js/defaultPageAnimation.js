const main = document.querySelector('main')

const loadingPage = () => {
    main.classList.add('relative');
    const brand = document.createElement('div')
    brand.innerHTML = `<h2>M</h2><h2>D</h2><h2>V</h2>`
    brand.classList.add('brand', 'font-black', 'flex', 'items-center', 'justify-center', 'text-8xl', 'flex-col', 'gap-10', 'fixed', 'inset-0', 'z-[-1]')
    main.appendChild(brand)
}
loadingPage()


const droptDwonMenu = () => {
    const burger = document.querySelector('#dropDown')
    const menu = document.querySelector('#dropDownMenu')
    burger.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden')
            menu.classList.add('flex')
        } else {
            menu.classList.remove('flex')
            menu.classList.add('hidden')
        }
    })

}
droptDwonMenu()


const createCard = (oggetti) => {
    const cardsContainer = document.querySelector('.cardsContainer')
    cardsContainer.innerHTML = ''
    oggetti.forEach(card => {
        const cardBody = document.createElement('div')
        cardBody.classList.add('cardBody', 'flip-card', 'p-2', 'rounded-md')
        cardsContainer.append(cardBody)

        const flipCardInner = document.createElement('div')
        flipCardInner.classList.add('flip-card-inner')

        const figureProduct = document.createElement('figure')
        figureProduct.classList.add('w-full', 'figureProduct', 'flip-card-front', 'rounded-md')
        const imgProduct = document.createElement('img')
        imgProduct.classList.add('w-full', 'rounded-md')
        imgProduct.src = card.imageUrl
        figureProduct.append(imgProduct)

        const description = document.createElement('div')
        description.classList.add('description', 'flip-card-back', 'flex', 'flex-col', 'justify-between', 'p-1', 'rounded-md')
        const name = document.createElement('h3')
        name.textContent = `product name: ${card.name}`
        const brand = document.createElement('p')
        brand.textContent = `barnd name: ${card.brand}`
        const descriptionText = document.createElement('p')
        descriptionText.textContent = `description: ${card.description}`
        const lastInfo = document.createElement('div')
        lastInfo.classList.add('lastInfo', 'flex', 'w-full', 'justify-between', 'items-center')
        const price = document.createElement('p')
        price.textContent = `price: ${card.price}`
        const page = document.createElement('button')
        page.classList.add('bg-white', 'text-black', 'rounded-lg', 'p-2')
        const linkpage = document.createElement('a')
        linkpage.href = `./productPage.html?id=${card._id}`
        page.append(linkpage)
        linkpage.textContent = 'object page'

        lastInfo.append(price, page)

        description.append(name, brand, descriptionText, lastInfo)

        flipCardInner.append(figureProduct, description)
        cardBody.append(flipCardInner)
    });
}

/* const removeMyMain = () => {setTimeout(function(){main.classList.remove('myMain'), main.classList.add('myMain2')},1000)} */