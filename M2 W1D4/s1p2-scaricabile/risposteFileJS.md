# Domande:
1. Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
2. Descrivi cos'è un oggetto in JavaScript, con parole tue.
3. Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
4. Crea una variable di nome "x" e assegna ad essa il numero 12.
5. Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
6. Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
7. Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!). Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa). Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!). NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare consolelog().

# Risposte:
1. i principali datatype in JavaScript sono:

-string: tratta dati di genere testuale come nomi o altre parole o lettere.

-number: tratta dati di genere numerico.

-boolean: tratta dati con due casi specifici "true" o "false", che intende che se la variabbile è vera o se la variabbile è falsa .

-null: è un valore che viene assegnato per azzerare il contenuto della variabile.

-undefined: è un valore di default assegnato per specificare che il contenuto della variabile non è definito.


2. un ogetto è un'entita complessa o meglio definibile come un contenitore, contenete più tipi di variabili di diverso tipo a suo interno e quindi complesso.
3.  console.log(12+20);
4. let x = 12;
5. let name = 'marco';
6. console.log(4-x);
7. 
    let name1 = 'john'; 

    let name2 = 'John';

    caso 1:

    console.log(name1 == name2);


    caso 2:

    console.log(name1 == name2.toLowerCase());
