# Domande:
1. Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
2. Descrivi cos'è un oggetto in JavaScript, con parole tue.
3. Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
4. Crea una variable di nome "x" e assegna ad essa il numero 12.
5. Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
6. Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
7. Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!). Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa). Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!). NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare consolelog().

# Risposte:
1. i principali datatype in JavaScript sono:

-string

-number

-boolean

-null

-undefined


2. un ogetto è un'entita complessa o meglio definibile come un contenitore, contenete più tipi di variabili di diverso tipo a suo interno e quindi complesso.
3.  console.log(12+20);
4. let x = 12
5. let name = 'marco'
6. console.log(4-x);
7. caso 1:

    let name1 = 'john'; 

    let name2 = 'John';

    console.log(name1 == name2);


    caso 2:

    let name1 = 'john';

    let name2 = 'John';

    let name2low = name2.toLowerCase();

    console.log(name1 == name2low);
