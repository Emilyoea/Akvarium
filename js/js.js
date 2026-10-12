/*Når man trykker på start knappen, bliver man sendt videre til akvarium.html*/
const startButton = document.querySelector("#startButton");
if (startButton) {
    startButton.addEventListener("click", function(){
        window.location.href = "akvarium.html";
    });
}


// Sæt tiden i millisekunder (0.5 minutter = 0.5 * 60 * 1000)
const INAKTIVITETS_TID = 30000; 
let timeren;

// Funktion der sender brugeren tilbage til forsiden
function gaaTilForside() {
    window.location.href = "index.html"; 
}

// Funktion der nulstiller timeren
function nulstilTimer() {
    clearTimeout(timeren);
    timeren = setTimeout(gaaTilForside, INAKTIVITETS_TID);
}

// Lyt efter klik på hele siden
window.addEventListener('click', nulstilTimer);

// Start timeren første gang siden indlæses
nulstilTimer();