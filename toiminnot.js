let muunnaPainike = document.getElementById("painike");
let vastausRivi = document.getElementById("muunnos");

muunnaPainike.addEventListener("click", tarkastus);

function tarkastus(event){
    event.preventDefault();
    let syote = document.getElementById("lukema").value;
    let pituus = syote.length;
    syote = Number(syote);
    if(isNaN(syote) == true || pituus < 1){
        vastausRivi.innerHTML = "Et antanut muunnokseen soveltuvaa arvoa.";
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
    vastausRivi.innerHTML = `${celsius}°C on ${vastaus}°F.`;
}

function fahrenheitC(fahrenheit){
    let vastaus = (fahrenheit - 32) / 1.8;
    vastausRivi.innerHTML = `${fahrenheit}°F on ${vastaus}°C.`;
}