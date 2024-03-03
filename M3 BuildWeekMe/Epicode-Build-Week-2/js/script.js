const header = document.querySelector('header');
const hero = document.getElementById('hero');
const navbar = document.querySelector('ul.navbar-nav')
const searchbar = document.querySelector('.searchbar');
const searchbarInputs = document.querySelectorAll('.searchbar input');
const searchbarButton = document.querySelector('.searchbar__button');


window.onload = () => {
    createCards()
    setCityName()
    
}

window.addEventListener('scroll', () => {

    if (this.innerWidth >= 1024) {
        searchbarAnimation();

        if (this.scrollY >= (hero.clientHeight)) {
            changeHeader(true)
        } else {
            changeHeader(false)
        }
    }
})


const searchbarAnimation = () => {

    if (this.scrollY > header.clientHeight) {
        navbar.classList.add('scale-0');
        searchbarInputs.forEach(input => {
            input.classList.add('d-none')
        })
        searchbar.classList.add('searchbar--small', 'shadow');
        searchbarButton.classList.add('searchbar__button--small');
    }
    else {
        navbar.classList.remove('scale-0');
        searchbarInputs.forEach(input => {
            input.classList.remove('d-none')
        })
        searchbar.classList.remove('searchbar--small', 'shadow');
        searchbarButton.classList.remove('searchbar__button--small');
    }
}


const changeHeader = (bool) => {
    let isVisible = bool;
    const logo = document.querySelector('.logo--white');
    const menu = document.querySelectorAll('.settings-nav a.nav-link');

    if (isVisible) {
        header.classList.add('bg-white', 'shadow-sm');
        logo.src = './assets/logo-pink.png';
        menu.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-secondary');
        })
    } else {
        header.classList.remove('bg-white', 'shadow-sm');
        logo.src = './assets/logo.png';
        menu.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-secondary');
        })
    }
}


const createCards = () => {
    const cardsContainer = document.querySelector('.cards-container');
    const cities = ['Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna', 'Firenze', 'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova', 'Trieste', 'Taranto']

    cities.map(city => {
        const col = document.createElement('div');
        col.classList.add('col');

        col.innerHTML = `<div class="card flex-row border-0 mb-3  mb-lg-2  ">
                            <div class="card-img ">
                                 <img src="https://picsum.photos/200" alt="" class="w-100 rounded-4 ">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center ">
                                <h3 class="card-title h6"><a class="text-decoration-none text-black cityName" href="apartment.html">${city}</a></h3>
                                <p class="card-text text-secondary small">${Math.ceil(Math.random()*15)} hrs drive</p>
                            </div>
                        </div>`
        
        cardsContainer.append(col);
    })

}


const setCityName = () => {
    const links = document.querySelectorAll('a.cityName');
    console.log(links);

    links.forEach(link => {
        link.addEventListener('click', () => {
            let cityName = link.innerHTML;
            localStorage.setItem('cityName', cityName)
        })
    })
}
