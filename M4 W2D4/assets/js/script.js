/* ricezione info dal serve */

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

const info = async () => {
    spinner()
    try {
        const info = await fetch('https://striveschool-api.herokuapp.com/books')
        const books = await info.json()

        cards(books)
        filterBook(books)
    } catch (error) {
        console.log(error.message);
    }
}
info()

const cards = (books) => {
    const main = document.querySelector('main')
    main.classList.remove('calc')
    main.classList.add('my-5')
    const rowForSpinner = document.querySelector('#rowForCard')
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


        const containerButton = document.createElement('div')
        containerButton.classList.add('position-absolute', 'bottom-0', 'end-0')


        const buttonWishlist = document.createElement('button')
        buttonWishlist.classList.add('m-1', 'buttonCard')
        buttonWishlist.setAttribute('id', 'buttonWishlist')
        buttonWishlist.textContent = 'add to wishlist'

        const buttonBuy = document.createElement('button')
        buttonBuy.classList.add('m-1', 'buttonCard')
        buttonBuy.setAttribute('id', 'buttonBuy')
        buttonBuy.setAttribute('data-bs-toggle', 'modal')
        buttonBuy.setAttribute('data-bs-target', '#staticBackdrop')
        buttonBuy.textContent = 'buy now'

        const badge = document.createElement('span')
        badge.classList.add('badge', 'rounded-pill', 'text-bg-success', 'position-absolute', 'top-0', 'end-0', 'm-1', 'opacity-0')
        badge.textContent = 'add list'



        containerButton.append(buttonWishlist, buttonBuy)

        cardBody.append(cardTitle, cardNameArtis, cardDurationSong, containerButton, badge)

        rowInCard.append(containerImg, containerInfo)

    });
    buyNOW()
    whishlist()
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

const arrayWhishlist = []
let defaultValue = 0

const whishlist = () => {
    const cardsBody = document.querySelectorAll('.card')


    console.log(defaultValue);
    cardsBody.forEach(card => {
        card.querySelector('#buttonWishlist').addEventListener('click', () => {
            const title = card.querySelector('.card-title').textContent
            arrayWhishlist.push(title)
            defaultValue = arrayWhishlist.length
            console.log(defaultValue);
            const badge = card.querySelector('.badge')
            badge.classList.add('opacity-100')
        })
    })

    document.querySelector('#wishlist').addEventListener('click', () => {
        if (arrayWhishlist == '') {
            const modalTitle = document.querySelector('#staticBackdropLabel')
            modalTitle.innerHTML = ''
            modalTitle.textContent = 'Whishlist'

            const modaBody = document.querySelector('.modal-body')

            modaBody.innerHTML = ''

            const empty = document.createElement('p')
            empty.textContent = 'The wishlist is empty'

            modaBody.append(empty)

            document.querySelector('#buttonModal').innerHTML = ''
            document.querySelector('#buttonModal').textContent = 'Close'

        } else {
            const modalTitle = document.querySelector('#staticBackdropLabel')
            modalTitle.innerHTML = ''
            modalTitle.textContent = 'Whishlist'

            const modaBody = document.querySelector('.modal-body')

            modaBody.innerHTML = ''
            arrayWhishlist.forEach(title => {
                const containerBook = document.createElement('div')
                containerBook.classList.add('w-100', 'd-flex', 'justify-content-between', 'align-content-center', 'mb-2', 'containerBook')

                const titleBook = document.createElement('p')
                titleBook.classList.add('m-0')
                titleBook.textContent = title

                const removeButton = document.createElement('button')
                removeButton.textContent = 'remove book'
                removeButton.classList.add('removeButton')
                containerBook.append(titleBook, removeButton)
                modaBody.append(containerBook)
            })


            const modalFooter = document.querySelector('.modal-footer')
            modalFooter.innerHTML=''

            const total = document.createElement('span')
            total.setAttribute('id','badge')
            total.classList.add('badge', 'rounded-pill', 'text-bg-success',)
            total.textContent = 'totl Books: '+ defaultValue

            const emptyCartButton = document.createElement('button')
            emptyCartButton.classList.add('btn', 'btn-success')
            emptyCartButton.setAttribute('id', 'emptyCartButton')
            emptyCartButton.textContent = 'empty cart'


            const button = document.createElement('button')
            button.classList.add('btn', 'btn-success')
            button.setAttribute('data-bs-dismiss', "modal")
            button.setAttribute('id','buttonModal')
            button.innerHTML = ''
            button.textContent = 'Buy'
            
            modalFooter.append(total, emptyCartButton, button)

            button.addEventListener('click', () => {
                arrayWhishlist.length = 0
                defaultValue = arrayWhishlist.length
            });
            
            emptyCart()
            removeBook()
        }
    })
}


const emptyCart = () => {
    const emptyCartButton = document.querySelector('#emptyCartButton')
    emptyCartButton.addEventListener('click', () => {
        sum = 0
        arrayWhishlist.length = 0

        const modaBody = document.querySelector('.modal-body')

        modaBody.innerHTML = ''

        const empty = document.createElement('p')
        empty.textContent = 'The wishlist is empty'

        const total = document.querySelector('#badge')
        total.textContent = 'totl Books: ' + arrayWhishlist.length

        modaBody.append(empty)
    })
}


const removeBook = (books) => {
    const modal = document.querySelector('.modal-body')
    const containerBook = modal.querySelectorAll('.containerBook')
    containerBook.forEach(x => {
        const removeButton = x.querySelector('.removeButton')
        removeButton.addEventListener('click', () => {
            x.remove(x)
            let element = x.textContent
            if (element in arrayWhishlist) {
                console.log("La variabile è presente nell'array");
            } else {
                arrayWhishlist.splice(arrayWhishlist.indexOf(element), 1);
                defaultValue = arrayWhishlist.length
                console.log(defaultValue);
                const total = document.querySelector('#badge')
                total.textContent = 'totl Books: ' + defaultValue
                /* console.log(arrayWhishlist,defaultValue); */
                if (modal.innerHTML === '') {
                    const empty = document.createElement('p')
                    empty.textContent = 'The wishlist is empty'
                    modal.append(empty)
                }
            
            }
        })
    })
}


const filterBook = (books) => {
    const searchBar = document.querySelector('#searchBar')
    books.forEach(book => {
        searchBar.addEventListener('input', () => {
            cards(books.filter(book => book.title.includes(searchBar.value)));
        })
    })
}




