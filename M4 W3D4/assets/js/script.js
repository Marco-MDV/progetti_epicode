const main = document.querySelector('main')

/* loading della paggina */

const spinner = () => {
    const spinner = document.createElement('div')
    main.classList.add('main2')
    spinner.innerHTML = '<div class="spinner-border text-secondary" role="status"> <span class="visually-hidden">Loading...</span> </div>'
    spinner.classList.add('spinner', 'd-flex', 'justify-content-center', 'align-items-center')
    main.append(spinner)
}
spinner() 
/* richiesta API */

const info = async () => {

    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await result.json()
        if (result.ok) {
            main.innerHTML =''
            resize(data)

            search(data)

            /* scelta iniziale del tipo di paggina da far vedere*/

            window.addEventListener('load', () => {
                if (window.innerWidth > 583) {
                    table(data)
                } else if (window.innerWidth < 583) {
                    tableForSmartPhone(data)
                }
            })

        }else{
            alert(error.message)
            alert(result.message)
        }
    } catch (error) {
        console.log(error);
    }
}
info()


/* filtro per i togler */

const filter = () => {
    const options = document.querySelectorAll('input[type="checkbox"]');


    options.forEach(option => {
        option.addEventListener('change', () => {
            if (option.checked) {
                options.forEach(otherOption => {
                    if (otherOption !== option) {
                        otherOption.checked = false;
                    }
                });
            }
        });
    });
}
filter()


/* variabbile globbale per il numero di righe/elementi presenti */

let rowNumber = 1

/* generazione della tabella per gli utenti */

const table = (users) => {
    rowNumber = 1
    main.classList.remove('main2')
    main.innerHTML = ''
    const table = document.createElement('table')
    table.classList.add('table', 'table-hover', 'my-5', 'myTable')
    const thead = document.createElement('thead')

    const tr = document.createElement('tr')

    thead.appendChild(tr)
    main.append(table)
    const th1 = document.createElement('th')
    th1.setAttribute('scope', 'col')
    th1.textContent = '#'

    const th2 = document.createElement('th')
    th2.setAttribute('scope', 'col')
    th2.textContent = 'Name'

    const th3 = document.createElement('th')
    th3.setAttribute('scope', 'col')
    th3.textContent = 'Username'

    const th4 = document.createElement('th')
    th4.setAttribute('scope', 'col')
    th4.textContent = 'Email'

    tr.append(th1, th2, th3, th4)

    const tbody = document.createElement('tbody')

    table.append(thead, tbody)

    users.forEach((user) => {
        const tr = document.createElement('tr')
        tbody.append(tr)

        const th = document.createElement('th')
        th.setAttribute('scope', 'row')
        th.textContent = String(rowNumber)
        rowNumber++

        const td1 = document.createElement('td')
        td1.classList.add('text-truncate')
        td1.textContent = user.name

        const td2 = document.createElement('td')
        td2.classList.add('text-truncate')
        td2.textContent = user.username

        const td3 = document.createElement('td')
        td3.classList.add('text-truncate')
        td3.textContent = user.email

        tr.append(th, td1, td2, td3)
        tbody.append(tr)

    })
}

/* funzione di ricerca */

const search = (users) => {
    const searchBar1 = document.querySelector('#searchbar')
    const checboxInput = document.querySelectorAll('.checboxInput')
    checboxInput.forEach(inputsChecbox => {
        const inputs = inputsChecbox.querySelectorAll('input[type="checkbox"]')
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                if (input.checked) {
                    const text = inputsChecbox.querySelector('input + label').textContent.toLowerCase()
                    searchBar1.addEventListener('input', () => {
                        let searchUser = users.filter((user) => user[text].includes(searchBar1.value))
                        newArrow(searchUser);
                    })
                }
            })
        })
    });
}


/* risultati di ricerca */

const newArrow = (searchUsers) => {
    rowNumber = 1

    if (window.innerWidth > 583) {
        newArrowPC(searchUsers)
    } else if (window.innerWidth < 583) {
        newArrowMobile(searchUsers)
    }
}



/* new arrow for pc */

const newArrowPC = (searchUsers) => {
    const tableVariabile  = document.querySelector('table')
    const tbody = tableVariabile.querySelector('tbody')
    tbody.innerHTML = ''
    
    searchUsers.forEach(newUsers => {
        const tr = document.createElement('tr')
        tbody.append(tr)

        const th = document.createElement('th')
        th.textContent = rowNumber
        rowNumber++

        const td1 = document.createElement('td')
        td1.textContent = newUsers.name

        const td2 = document.createElement('td')
        td2.textContent = newUsers.username

        const td3 = document.createElement('td')
        td3.textContent = newUsers.email

        tr.append(th, td1, td2, td3) 
    })
}

/* new Arrow mobile and tablet */

const newArrowMobile = (searchUsers) => {
    const main = document.querySelector('main')
    rowNumber = 1
    main.innerHTML = ''
    const dropdown = document.createElement('div')
    dropdown.classList.add('dropdown', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'gap-3', 'my-5')
    main.append(dropdown)

    searchUsers.forEach((user) => {
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-secondary', 'dropdown-toggle', 'w-100')
        button.setAttribute('type', 'button')
        button.setAttribute('data-bs-toggle', 'dropdown')
        button.setAttribute('aria-expanded', 'false')
        button.textContent = rowNumber

        rowNumber++

        const dropdownMenu = document.createElement('ul')
        dropdownMenu.classList.add('dropdown-menu')

        const li1 = document.createElement('li')
        li1.textContent = `name: ${user.name}`

        const li2 = document.createElement('li')
        li2.textContent = `username: ${user.username}`

        const li3 = document.createElement('li')
        li3.textContent = `email: ${user.email}`


        dropdown.append(button, dropdownMenu)
        dropdownMenu.append(li1, li2, li3)
    })
}

/* desine for smartrphone */

const tableForSmartPhone = (users) => {
    rowNumber = 1
    main.classList.remove('main2')
    main.innerHTML = ''

    const dropdown = document.createElement('div')
    dropdown.classList.add('dropdown', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'gap-3', 'my-5')
    main.append(dropdown)

    users.forEach((user) => {
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-secondary', 'dropdown-toggle', 'w-100')
        button.setAttribute('type', 'button')
        button.setAttribute('data-bs-toggle', 'dropdown')
        button.setAttribute('aria-expanded', 'false')
        button.textContent = rowNumber

        rowNumber++

        const dropdownMenu = document.createElement('ul')
        dropdownMenu.classList.add('dropdown-menu')

        const li1 = document.createElement('li')
        li1.textContent = `name: ${user.name}`

        const li2 = document.createElement('li')
        li2.textContent = `username: ${user.username}`

        const li3 = document.createElement('li')
        li3.textContent = `email: ${user.email}`


        dropdown.append(button, dropdownMenu)
        dropdownMenu.append(li1, li2, li3)
    })

}

/* funzione resize dello screen */

const resize = (data) => {

    window.addEventListener('resize', () => {
        if (window.innerWidth > 583) {
            table(data)
        } else if (window.innerWidth < 583) {
            tableForSmartPhone(data)
        }
    })


}

