function search() {
    //avvio ricerca
    const form = document.querySelector('form');
    form.autocomplete='off'
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        match()
        remove()
        addResult()
    })
} search()

//ricerca match
function match() {
    //input user
    const location = document.querySelector('#idLocation')
    const title = document.querySelector('#idTitle')

    //array per il risultato
    const result = [];

    jobs.forEach(element => {
        //elementi dell'array
        const titleJob = element.title.toLowerCase();
        const locationJob = element.location.toLowerCase();

        if (titleJob.includes(title.value.toLowerCase()) && locationJob.includes(location.value.toLowerCase())) {
            result.push(element)
        }
    });

    //oggetto per console
    const total = {
        count: result.length,
        result
    };

    //totale finale in console
    console.log(total);

    addResult(result);
}

function remove() {
    //rimozione del container
    const containerRemove = document.querySelector('.container')
    containerRemove.remove()
}


function addResult(total) {
    //cancella le carte precedentemente create
    const main = document.querySelector('main')
    main.innerHTML=' '

    //risultati
    total.forEach(element => {
        //container
        const main = document.querySelector('main')
        const container = document.createElement('div');
        container.classList.add('container2');
        main.appendChild(container);

        //section1
        const section1 = document.createElement('div');
        section1.classList.add('section1');

        container.appendChild(section1)

        //element section1
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'https://picsum.photos/200/200';
        const elementJob = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = element.title;
        const location = document.createElement('h2');
        location.textContent = element.location;

        section1.appendChild(figure);
        figure.appendChild(img);
        section1.appendChild(elementJob)
        elementJob.appendChild(title)
        elementJob.appendChild(location)

        //section2
        const titleDescription = document.createElement('h3');
        titleDescription.textContent = 'description:';
        const description = document.createElement('p');
        description.textContent = 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.';

        container.appendChild(titleDescription)
        container.appendChild(description) 
    });
}

