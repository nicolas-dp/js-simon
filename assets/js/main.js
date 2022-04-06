/* Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, 
uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri 
da indovinare sono stati individuati. */



//Genera numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function viewsNumber(min, max) {

    const cells = document.querySelector(".cells");
    cells.createElement("div")
    cells.classList.add("cell")
    
    console.log(cells);
}


