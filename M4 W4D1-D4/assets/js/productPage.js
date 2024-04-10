window.onload=()=>{
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id')

    requestInfo().then(res => singleCard(res.filter((element)=>element._id === id)))
}


const singleCard = (oggetto) =>{  
    const cardsContainer = document.querySelector('.cardsContainer')
    cardsContainer.innerHTML = ''
    oggetto.forEach(card => {
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
        price.textContent = `price: ${card.price}€`

        description.append(name, brand, descriptionText, price)

        flipCardInner.append(figureProduct, description)
        cardBody.append(flipCardInner)
    });

}
