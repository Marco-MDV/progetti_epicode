window.addEventListener('load',()=>{
    requestnfoDefault()
})


const requestnfoDefault = async () => {
    try {
        const responseDefoult = await fetch('https://api.pexels.com/v1/search?query=random',{
            headers:{
                'Authorization':'gJ0ehmD47Yj0OwAcvzRFtqpz5iceYxvp8A32CaopTHRyHTIzx5TVvXxF'
            }
        });
        const responseDefoultJson = await responseDefoult.json()
        createCard(responseDefoultJson.photos)
    } catch (error) {
        console.log(error);
    }
}

/* foreach */

const createCard=(value)=>{
    const rowForImg = document.querySelector('.rowForImg')
    rowForImg.innerHTML=' '
    value.forEach(element => {
        const divColCard = document.createElement('div')
        divColCard.classList.add('col-12', 'col-md-6','col-lg-4', 'mb-3','d-flex', 'justify-content-center','align-content-center')
        rowForImg.append(divColCard)

        const containerImg = document.createElement('figure')
        containerImg.classList.add('dimensionFigure','position-relative')
        divColCard.append(containerImg)

        const img = document.createElement('img')
        img.src=element.src.original
        img.classList.add('dimensionImg')

        const buttonSave = document.createElement('button');
        buttonSave.innerHTML='<ion-icon name="bookmark-outline"></ion-icon>'
        buttonSave.classList.add('position-absolute','bottom-0','end-0','saveButton','d-flex', 'justify-content-center','align-content-center','p-2')
        

        const photographer = document.createElement('h6');
        photographer.textContent=element.photographer;
        photographer.classList.add('position-absolute','top-0','start-0','photographer')

        const price = document.createElement('p');
        price.textContent=element.height + '€'
        price.classList.add('position-absolute','bottom-0','start-0','price')


        containerImg.append(img,buttonSave,photographer,price)
    
    });
    saveElement()
}

const search = () => {

    const buttonSearch =  document.querySelector('#buttonSearch')

    buttonSearch.addEventListener('click',()=>{
        const search = document.querySelector('#siteSearch')
        if (search.value !='') {
            requestInfoForSearch(search.value)
        }else{
            console.log('error');
        }
    })
}
search()

const requestInfoForSearch = async (value) => {
    try {
        const response = await fetch('https://api.pexels.com/v1/search?query='+value,{
            headers:{
                'Authorization':'gJ0ehmD47Yj0OwAcvzRFtqpz5iceYxvp8A32CaopTHRyHTIzx5TVvXxF'
            }
    });
    const responseInJson = await response.json()
        if (responseInJson.photos != 0 ) {
            createCard(responseInJson.photos)
            console.log(responseInJson.photos);
        }else{
            alert('pleas insert valid input')
        }
    } catch (error) {
        console.log(error);
    }
}

/* map */

const saveElement=()=>{
    const figures = document.querySelectorAll('.dimensionFigure')
    const figure = Array.from(figures).map((figure)=>{
        const button = figure.querySelector('button')
        button.addEventListener('click',()=>{
            const artistTitle = figure.querySelector('.photographer')
            const price = figure.querySelector('.price')
            const dropdownMenu = document.querySelector('.dropdown-menu ul')
            dropdownMenu.classList.add('list-group', 'list-group-flush')

            const dropdownMenuElement = document.createElement('li')
            dropdownMenuElement.innerHTML=`<p class='m-0'>artwork name: ${artistTitle.textContent} <br> price: ${price.textContent}</p>`;
            dropdownMenuElement.classList.add('mb-2')
            dropdownMenu.append(dropdownMenuElement)

            reduce(price.textContent)
        })
    })
}


const emptyArray = []

const reduce=(element)=>{
    emptyArray.push(element.replace('€', ''))
    let sum = emptyArray.reduce((curr, temp)=>Number(curr) + Number(temp))
    
    finalCount(sum)
}

const modalBodyListPrice = document.querySelector('.modalBodyListPrice')


const pay = () =>{
    const pay = document.querySelector('#pay')
    const allElementlist = Array.from(document.querySelectorAll('.dropdown-menu ul'))
    
    pay.addEventListener('click',()=>{
        allElementlist.forEach(x=>{
            
            Array.from(x.querySelectorAll('li p')).forEach(x=>{
                const element = document.createElement('p')
                element.textContent=x.textContent
                modalBodyListPrice.append(element)
            })
        })
    })
}
pay()

const finalCount = (sum) =>{
    modalBodyListPrice.innerHTML=''
    const price = document.createElement('h6')
    price.textContent='total price: '+sum+'€'
    modalBodyListPrice.append(price)
}

const clearCart = ()=>{
    const closeButton = document.querySelector('#closeModal')
    const modalBodyListPriceList = document.querySelector('.list-group')
    closeButton.addEventListener('click',()=>{
        modalBodyListPriceList.innerHTML=''
    })
}
clearCart()