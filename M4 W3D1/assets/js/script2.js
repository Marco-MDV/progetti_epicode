window.onload=()=>{
    const searchParams = new URLSearchParams(window.location.search)
    infoAsin(searchParams.get('asin'))

}


const spinner = () => {
    const main = document.querySelector('main')
    main.classList.add('calc')
    const rowForSpinner = document.querySelector('#rowForCard')
    rowForSpinner.innerHTML =
        `
        <div class="col h-100" id="colSpinner">
            <div class="h-100 d-flex justify-content-center align-items-center" id="spinner">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        `
}

const main = document.querySelector('main')
const rowForSpinner = document.querySelector('#rowForCard')

const infoAsin = async (asin) =>{
    spinner()
    try {
        const infoAsin = await fetch('https://striveschool-api.herokuapp.com/books/?asin='+asin)
        const infoAsinJson = await infoAsin.json()
        if (infoAsin.ok) {
            console.log(infoAsinJson.length);
            if (infoAsinJson.length>1) {
                main.classList.remove('calc2')
                rowForSpinner.classList.remove('justify-content-center', 'align-items-stretch')
                cards(infoAsinJson)
            }else if(infoAsinJson.length==1){
                main.classList.add('calc2')
                rowForSpinner.classList.add('justify-content-center', 'align-items-stretch')
                cards(infoAsinJson)
            }else{
                spinner() 
            }
        }

    } catch (error) {
        console.log(error);
    }

}

const cards = (books) => {
    
    main.classList.remove('calc')
    main.classList.add('my-5')
    
    rowForSpinner.classList.add('justify-content-center', 'align-items-stretch')
    rowForSpinner.innerHTML = ''
    books.forEach(element => {

        const divColCard = document.createElement('div')
        divColCard.classList.add('col-12', 'col-md-6', 'mb-3', 'd-flex', 'justify-content-center', 'align-items-stretch')
        rowForSpinner.append(divColCard)

        const card = document.createElement('div')
        card.classList.add('card', 'h-100', 'maxWidth')
        divColCard.append(card)

        const rowInCard = document.createElement('div')
        rowInCard.classList.add('row', 'h-100', 'g-0')
        card.append(rowInCard)
        /* section up card */
        const containerImg = document.createElement('div')
        containerImg.classList.add('col-md-4', 'pr-md-0')

        const imgCover = document.createElement('img')
        imgCover.src = element.img
        imgCover.classList.add('img-fluid', 'rounded-start', 'myImgClass')

        containerImg.append(imgCover)

        /* section down */
        const containerInfo = document.createElement('div')
        containerInfo.classList.add('col-md-8', 'pl-0')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'px-3', 'px-md-1', 'position-relative', 'h-100')

        containerInfo.appendChild(cardBody)

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent = element.title


        const cardNameArtis = document.createElement('p')
        cardNameArtis.classList.add('card-text')
        cardNameArtis.innerText = 'category: ' + element.category

        const cardDurationSong = document.createElement('p')
        cardDurationSong.classList.add('card-text')
        cardDurationSong.innerHTML = '<small class="text-muted"> price: ' + element.price + '$</small>'


        const buttonBuy = document.createElement('button')
        buttonBuy.classList.add('m-1', 'buttonCard')
        buttonBuy.setAttribute('id', 'buttonBuy')
        buttonBuy.setAttribute('data-bs-toggle', 'modal')
        buttonBuy.setAttribute('data-bs-target', '#staticBackdrop')
        buttonBuy.textContent = 'buy now'



        cardBody.append(cardTitle, cardNameArtis, cardDurationSong,buttonBuy)

        rowInCard.append(containerImg, containerInfo)

    });
    buyNOW()
}

const buyNOW = () => {
    const cardsBody = document.querySelectorAll('.card')
    cardsBody.forEach(card => {
        card.querySelector('#buttonBuy').addEventListener('click', (button) => {
            const modalTitle = document.querySelector('#staticBackdropLabel')
            modalTitle.innerHTML = ''
            modalTitle.textContent = card.querySelector('.card-title').textContent

            const modaBody = document.querySelector('.modal-body')

            modaBody.innerHTML = ''

            const gender = document.createElement('p')
            gender.textContent = card.querySelector('.card-text').textContent

            const price = document.createElement('p')
            price.textContent = card.querySelector('.text-muted').textContent

            modaBody.append(gender, price)

            document.querySelector('#buttonModal').innerHTML = ''
            document.querySelector('#buttonModal').textContent = 'Buy'
        })
    })
}
