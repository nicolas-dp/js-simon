/* Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, 
uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri 
da indovinare sono stati individuati. */

//Puntare l'elemento nella DOM
const numberElement = document.querySelector(".numbers");

//Creare array per salvare i numeri
const randomNumbers = [];


//Genera numeri casuali              
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateNumbers(5, 100)

//Visualizziamo nella dom l'array creato
numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`
//Aggiungiamo la classe cell
numberElement.classList.add("cell")

/**
 * Genereate random numbers
 * @param {number} total_numbers the total numbers in array
 * @param {number} numbers_limit the limit of number random generate
 * @returns
 */
function generateNumbers(total_numbers, numbers_limit) {
    //Genera 5 numeri casuali
    while (randomNumbers.length !== total_numbers) {
        const number = getRandomNumber(1, numbers_limit)
        //Verifica se sono tutti diversi i numeri nell'array
        if (!randomNumbers.includes(number)) {
            randomNumbers.push(number)
        }
    }
    return randomNumbers;
}


setTimeout(timer, 3000, numberElement, randomNumbers); //Passiamo le variabili per usarle nella funzione


//Faccio partire un timer di 30 sec. 
/**
 * 
 * @param {object} dom_element The dome element
 * @param {array} numbers_list 
 */
function timer(dom_element, numbers_list) {
    dom_element.innerHTML = ""; //Rimuove dalla DOM i numeri in elenco
    const user_attemps = []; //Dichiariamo un array vuoto
    //Creo un ciclo for per far inseriere i numeri visti precedentemente
    for (let i = 1; i <= 5; i++) {
        const user_number = parseInt(prompt(`Inserisci il ${i} numero: `));
        console.log(user_number);
        //Controlliamo se il numero inserito dall'utente è incluso nell'array creato random in precedenza
        //Controlliamo se il numero digitato non è stato già digitato in precedenza dall'utente
        if (numbers_list.includes(user_number) && !user_attemps.includes(user_number)) {
            user_attemps.push(user_number);
        }
        console.log(user_attemps);
    }

    alert(`Hai indovinato ${user_attemps.length} su ${randomNumbers.length} - I numeri sono: ${user_attemps}`)

}