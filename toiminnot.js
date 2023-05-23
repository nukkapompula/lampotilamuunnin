let muunnaPainike = document.getElementById("painike");
let vastausRivi = document.getElementById("muunnos");
let huomautusRivi = document.getElementById("nollapiste");
var desiM1 = document.getElementById("1dm");
var desiM2 = document.getElementById("2dm");
var desiM3 = document.getElementById("3dm");
const zeroC = -273.15;
const zeroF = -459.67;

muunnaPainike.addEventListener("click", tarkastus);

function tarkastus(event){
    event.preventDefault();
    let syote = document.getElementById("lukema").value;
    let pituus = syote.length;
    syote = Number(syote);
    if(isNaN(syote) == true || pituus < 1){
        vastausRivi.innerHTML = "Et antanut muunnokseen soveltuvaa arvoa.";
        huomautusRivi.style.display = "none";
        document.getElementById("lukema").value = "";
    } else {
        let muutosTyyppi = document.getElementById("tyyppi").value;
        if(muutosTyyppi == "c-f"){
            celsiusF(syote);
        } else {
            fahrenheitC(syote);
        }
        document.getElementById("lukema").value = "";
    }
    
    vastausRivi.style.display = "block";
}

function celsiusF(celsius){
    let vastaus = (celsius) * 1.8 + 32;
    if(desiM1.checked == true){
        vastausRivi.innerHTML = `${celsius}°C on yhtä kuin ${vastaus.toFixed(1)}°F.`;
    } else if (desiM2.checked == true) {
        vastausRivi.innerHTML = `${celsius}°C on yhtä kuin ${vastaus.toFixed(2)}°F.`;
    } else {
        vastausRivi.innerHTML = `${celsius}°C on yhtä kuin ${vastaus.toFixed(3)}°F.`;
    }
    if(vastaus < zeroF) {
        huomautusRivi.innerHTML = "Lämpötila alittaa absoluuttisen nollapisteen!"
        huomautusRivi.style.display = "block";
    } else {
        huomautusRivi.style.display = "none";
    }
}

function fahrenheitC(fahrenheit){
    let vastaus = (fahrenheit - 32) / 1.8;
    if(desiM1.checked == true){
        vastausRivi.innerHTML = `${fahrenheit}°F on yhtä kuin ${vastaus.toFixed(1)}°C.`;
    } else if (desiM2.checked == true) {
        vastausRivi.innerHTML = `${fahrenheit}°F on yhtä kuin ${vastaus.toFixed(2)}°C.`;
    } else {
        vastausRivi.innerHTML = `${fahrenheit}°F on yhtä kuin ${vastaus.toFixed(3)}°C.`;
    }
    if(vastaus < zeroC) {
        huomautusRivi.innerHTML = "Lämpötila alittaa absoluuttisen nollapisteen!"
        huomautusRivi.style.display = "block";
    } else {
        huomautusRivi.style.display = "none";
    }
}