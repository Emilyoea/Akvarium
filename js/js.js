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


// Når man trykker på luk knappen, bliver man sendt tilbage til forsiden
const lukknap = document.querySelector(".lukknap");
if (lukknap) {
    lukknap.addEventListener("click", function(){
        window.location.href = "akvarium.html";
    });
}

// Når man trykker på fiskene, bliver man sendt videre til klovnefisk.html
const fisk5 = document.querySelector("#fisk5");
if (fisk5) {
    fisk5.addEventListener("click", function(){
        window.location.href = "klovnefisk.html";
    });
}

const vandlyd = new Audio("lyde/vandlyd.mp3");
vandlyd.loop = true; // Sæt lyd til at loope
vandlyd.volume = 0.5; // Sæt lydstyrken til 50%

const lydKnap = document.querySelector("#lydKnap");
const lydIkon = document.querySelector("#lydIkon");

if (lydKnap && lydIkon) {
    lydKnap.addEventListener("click", function() {
        if (vandlyd.paused) {
            vandlyd.play();
            lydIkon.src = "lyde/lydikon.svg"; // Skift ikon til tændt
            lydIkon.alt = "sluk lyd";
        } else {
            vandlyd.pause();
            lydIkon.src = "lyde/slukket.svg"; // Skift ikon til slukket
            lydIkon.alt = "tænd lyd";
        }
    });
}

