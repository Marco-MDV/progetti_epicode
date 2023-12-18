const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2];
const shippingCost = 50;
let cartPrice = 0;
let utenteCheEffettuaLAcquisto = "Marco"; //cambia il valore qui per provare se il tuo algoritmo funziona!

/* ho creato un ciclo for per semplificare i calcoli */

for (let n of prices) {
    cartPrice += n;
}


/* prima parte */

for (const persone of [marco, paul, amy]) {
    if (utenteCheEffettuaLAcquisto === persone.name) {
        if (persone.isAmbassador === true) {
            let scount = cartPrice - (0.3 * cartPrice) 
            if(scount > 100){
                console.log('Ciao essendo che sei un amabassador stai usufruendo del 30% di sconto sul tuo prezzo di base:' + cartPrice + '€ ' + 'per tanto il tuo prezzo è di:'+scount+'€'+' inoltre hai speso oltre la soglia minima per la spedizione gratuidtà per tanto non devi pagare commissioni');
            }else if(scount <= 100){
                console.log('Ciao essendo che sei un amabassador stai usufruendo del 30% di sconto sul tuo prezzo di base:' + cartPrice + '€ ' + 'per tanto il tuo prezzo è di:'+scount+'€');
            }
        } else if (persone.isAmbassador === false) {
            if(cartPrice > 100){
                console.log('ciao la tua spesa è di:'+cartPrice+'€ '+'hai speso oltre la soglia minima per la spedizione gratuidtà per tanto non devi pagare commissioni');
            }else if(cartPrice <= 100){
                console.log('ciao la tua spesa è di:'+cartPrice+'€');
            }   
        }
        break
    }else if(utenteCheEffettuaLAcquisto != persone.name){
        console.log('inserisci un nome valido');
    }
}

/*Seconda parte */

/* let statusUser = []
let onlyAmbassador = []


statusUser.push(
   {
        name: "Marco",
        lastName: "Rossi",
        isAmbassador: true,
    },
    {
        name: "Gennro",
        lastName: "Rossi",
        isAmbassador: true,
    },
    {
        name: "Paul",
        lastName: "Flynn",
        isAmbassador: false,
    },
    {
        name: "Amy",
        lastName: "Reed",
        isAmbassador: false,
    }
)

for(let sU of statusUser){
    if(sU.isAmbassador === true){
        onlyAmbassador.push(
        sU.name + ' ' + sU.lastName
        )
        console.log(sU.name + ' ' + sU.lastName + " e' un ambassador");
    }else{
        console.log(sU.name + ' ' + sU.lastName + " non e' un ambassador");
    }

} */

/* console.log(onlyAmbassador); */
