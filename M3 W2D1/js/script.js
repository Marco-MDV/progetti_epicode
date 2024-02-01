
Negramaro = [
    "Mentre Tutto Scorre",
    "Una storia semplice",
    "La tua ragazza",
    "L'amore è un attimo",
    "Il veleno",
    "Il giorno di te",
    "La prima volta",
    "Se mi guardi negli occhi",
    "L'amore non è un gioco"
]

Sfera = [
    "X2VR",
    "Baby",
    "Macarena",
    "Bando",
    "Rockstar",
    "Cash",
    "7D",
    "Non mi fermo",
    "Pantera"
]

Marracash = [
    "Intro",
    "Non c'è paragone",
    "Quasi per caso",
    "In radio",
    "Niente canzoni d'amore",
    "Non sono il tuo eroe",
    "Non cambierò mai",
    "Con le mie spalle",
    "L'anima"
]

Luchè = [
    "Intro",
    "Il cielo è blu",
    "Lacrime di sangue",
    "Io e te",
    "Come te nessuno mai",
    "Non ho paura",
    "Il mio quartiere",
    "La mia città",
    "L'amore è un'altra cosa"
]


const nameCards = document.querySelectorAll('.leaveTruncate')

function nameLong() {
    nameCards.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.remove('text-truncate')
        })
    });
} nameLong()

function hideNameLong() {
    nameCards.forEach(element => {
        element.addEventListener('mouseleave', () => {
            element.classList.add('text-truncate')
        })
    })
} hideNameLong()