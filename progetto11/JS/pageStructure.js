const body = document.querySelector('body')

function Page() {
    //elementi iniziali
    const header = document.createElement('header');
    body.appendChild(header)
    const main = document.createElement('main');
    body.appendChild(main)
    
    //header section

        //sectionForm
        const form = document.createElement('form')
        header.appendChild(form)

        //logo
        const logo = document.createElement('figure');
        form.appendChild(logo)
        const img = document.createElement('img')
        img.src = './figure/logo.png'
        logo.appendChild(img)

        //inputs

            //input Title
            const inputTitle = document.createElement('input')
            inputTitle.placeholder = 'title'
            inputTitle.name = 'My Job'
            inputTitle.setAttribute('id','idTitle')
            const divInputTitle = document.createElement('div');
            divInputTitle.classList.add('autocomplete')
            form.appendChild(divInputTitle)
            divInputTitle.appendChild(inputTitle)

            //input Location
            const inputLocation = document.createElement('input')
            inputLocation.placeholder = 'località'
            inputLocation.name='My Location'
            inputLocation.setAttribute('id','idLocation')
            const divInputLocation = document.createElement('div');
            divInputLocation.classList.add('autocomplete')
            form.appendChild(divInputLocation)
            divInputLocation.appendChild(inputLocation)

        //button
        const buttonSearch = document.createElement('button')
        buttonSearch.textContent = 'send'
        form.appendChild(buttonSearch)
    
    //main section
        const container = document.createElement('div');
        container.classList.add('container')
        main.appendChild(container)
        const wellComeTitle = document.createElement('h1');
        wellComeTitle.classList.add('title');
        wellComeTitle.textContent='Welcome in to MDV!';
        container.appendChild(wellComeTitle)
        const descriptionMain = document.createElement('p');
        descriptionMain.classList.add('descriptionMain')
        descriptionMain.textContent='This is the best website for searching for jobs in the world!'
        container.appendChild(descriptionMain) 
        const description = document.createElement('p');
        description.classList.add('descriptionMain')
        description.textContent='Please enter your desired location and title of position.'
        container.appendChild(description)
        const warning = document.createElement('p');
        warning.classList.add('warning')
        warning.textContent="If you haven't idea, press the button for search every position in us DB"
        container.appendChild(warning)     

} Page()