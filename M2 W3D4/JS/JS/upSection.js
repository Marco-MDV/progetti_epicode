const body = document.querySelector('body')

function upSection() {
    const header = document.createElement('header')
    body.appendChild(header)

    const main = document.createElement("main")
    body.appendChild(main)

    const brandeName = document.createElement('h1')
    brandeName.innerText = ('Amazon 2.0')
    header.appendChild(brandeName)

    const table = document.createElement('section')
    main.appendChild(table)



    itemsCard.forEach(element => {
        const Card = document.createElement('div')
        table.appendChild(Card)

        const img = document.createElement('img')

        const titleElement = document.createElement('h2')

        const descriptionElement = document.createElement('p')

        const descriptionPriceElement = document.createElement('p')

        const descriptionLinkForProdact = document.createElement('p')

        const linkForProdact = document.createElement('a')

        const inputUser = document.createElement('input')

        const priceItem = element.price



        titleElement.textContent = element.title;
        img.src = element.Image;
        descriptionElement.textContent = element.description;
        descriptionPriceElement.innerHTML = 'questo è il prezzo del prodotto:  <span>' + priceItem + '</span>';
        descriptionLinkForProdact.innerHTML = 'questo è il link per il prodotto: <a>' + linkForProdact + '</a>';
        linkForProdact.href = element.link;
        linkForProdact.textContent = 'Link'
        inputUser.type = 'text'
        inputUser.placeholder = 'inserisci un tuo feedback'

        Card.append(img, titleElement, descriptionElement, descriptionPriceElement, descriptionLinkForProdact, linkForProdact, inputUser)
    });

    const buttonBot = document.createElement('button');
    const containerBot = document.createElement('div');
    buttonBot.classList.add('buttonBotClass')
    containerBot.classList.add('container')
    buttonBot.textContent = 'Help'
    main.append(buttonBot, containerBot)


} upSection()