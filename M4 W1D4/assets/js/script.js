const valueSerch = document.querySelector('#searchField')


const startCard=()=>{
    window.addEventListener('load',()=>{
        startCards('https://striveschool-api.herokuapp.com/api/deezer/search?q=mina')
    })
}
startCard()


const startCards = async (value)=>{
    try {
        const response = await fetch(value);
        const responseInJson = await response.json();
        if (response.ok) {
            startCardsList(responseInJson.data)
        }
    } catch (error) {
        console.log(error);
    }
}

const startCardsList=(value)=>{
    const colContainer = document.querySelector('.colCard')

    const rowCard = document.createElement('div')
    rowCard.classList.add('row')
    colContainer.append(rowCard)
    value.forEach(element => {
        const divColCard = document.createElement('div')
        divColCard.classList.add('col-12', 'col-md-6', 'mb-3','align-items-stretch')
        rowCard.append(divColCard)
    
        const card = document.createElement('div')
        card.classList.add('card','mb-3','h-100','maxWidth')
        divColCard.append(card)
    
        const rowInCard = document.createElement('div')
        rowInCard.classList.add('row', 'h-100','g-0')
        card.append(rowInCard)
        /* section up card */
        const containerImg = document.createElement('div')
        containerImg.classList.add('col-md-4', 'pr-md-0')
        
        const imgCover = document.createElement('img')
        imgCover.src=element.album.cover_big
        imgCover.classList.add('img-fluid','rounded-start','myImgClass')
    
        containerImg.append(imgCover)
    
        /* section down */
        const containerInfo = document.createElement('div')
        containerInfo.classList.add('col-md-8','pl-0')
    
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body','px-3','px-md-1')
    
        containerInfo.appendChild(cardBody)
    
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent=element.title
    
        const cardNameArtis = document.createElement('p')
        cardNameArtis.classList.add('card-text')
        cardNameArtis.innerText='Artist: '+element.artist.name
    
        const cardDurationSong = document.createElement('p')
        cardDurationSong.classList.add('card-text')
        cardDurationSong.innerHTML='<small class="text-muted"> Duration: '+element.duration+'s</small>'
    
        cardBody.append(cardTitle, cardNameArtis,cardDurationSong)
    
        rowInCard.append(containerImg, containerInfo)        
    });
}


const listenerSearch = () => {
    const buttonGo =  document.querySelector('#button-search')
    buttonGo.addEventListener('click',()=>{
        search('https://striveschool-api.herokuapp.com/api/deezer/search?q='+valueSerch.value)
        if (valueSerch.value !== ""){
            createSongListButton()
        }
        
    })
}
listenerSearch()


const search = async (value)=>{
    try {
        const response = await fetch(value);
        const responseInJson = await response.json();
        if (response.ok) {
            card(responseInJson.data)
        }
    } catch (error) {
        console.log('wait or error');
    }
}

createSongListButton = ()=>{
    const navbarList = document.querySelector('.navbar-nav ul li:last-child')

    navbarList.innerHTML=''

    const modalButton = document.createElement('button')
    modalButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'modalButton')
    modalButton.setAttribute('type','button')
    modalButton.setAttribute('data-toggle','modal')
    modalButton.setAttribute('data-target','#exampleModal')
    modalButton.textContent='Song List'

    navbarList.append(modalButton)
}


const card = (value) =>{
    const colContainer = document.querySelector('.colCard')

    colContainer.innerHTML=' '
    const rowCard = document.createElement('div')
    rowCard.classList.add('row')
    colContainer.append(rowCard)

    value.forEach(element => {
        const divColCard = document.createElement('div')
        divColCard.classList.add('col-12', 'col-md-6', 'mb-3','align-items-stretch')
        rowCard.append(divColCard)

        const card = document.createElement('div')
        card.classList.add('card','mb-3','h-100','maxWidth')
        divColCard.append(card)

        const rowInCard = document.createElement('div')
        rowInCard.classList.add('row', 'h-100','g-0')
        card.append(rowInCard)
        /* section up card */
        const containerImg = document.createElement('div')
        containerImg.classList.add('col-md-4', 'pr-md-0')
        
        const imgCover = document.createElement('img')
        imgCover.src=element.album.cover_big
        imgCover.classList.add('img-fluid','rounded-start','myImgClass')

        containerImg.append(imgCover)

        /* section down */
        const containerInfo = document.createElement('div')
        containerInfo.classList.add('col-md-8','pl-0')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body','px-3','px-md-1')

        containerInfo.appendChild(cardBody)

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent=element.title

        const cardNameArtis = document.createElement('p')
        cardNameArtis.classList.add('card-text')
        cardNameArtis.innerText='Artist: '+element.artist.name

        const cardDurationSong = document.createElement('p')
        cardDurationSong.classList.add('card-text')
        cardDurationSong.innerHTML='<small class="text-muted"> Duration: '+element.duration+'s</small>'

        cardBody.append(cardTitle, cardNameArtis,cardDurationSong)

        rowInCard.append(containerImg, containerInfo)
    });
    createList(value)
}

createList = (value) =>{
    const modalButton = document.querySelector('.modalButton')
    const modalBody = document.querySelector('.modal-body')

    modalButton.addEventListener('click',()=>{
        const modalTitle = document.querySelector('.pov')
        modalTitle.textContent='song list by '+valueSerch.value
        
        value.forEach(song=>{
            const songName = document.createElement('p')
            songName.textContent=song.title
            modalBody.append(songName)
        })

    })
}
