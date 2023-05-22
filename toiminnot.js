let muunnaPainike = document.getElementById("painike");
let vastausRivi = document.getElementById("muunnos");
var desiM1 = document.getElementById("1dm");
var desiM2 = document.getElementById("2dm");
var desiM3 = document.getElementById("3dm");

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
    if(desiM1.checked == true){
        console.log("1 on merkattuna")
    } else if (desiM2.checked == true) {
        console.log("2 on merkattuna")
    } else {
        console.log("3 on merkattuna")
    }
    vastausRivi.innerHTML = `${celsius}°C on yhtä kuin ${vastaus}°F.`;
}

function fahrenheitC(fahrenheit){
    let vastaus = (fahrenheit - 32) / 1.8;
    vastausRivi.innerHTML = `${fahrenheit}°F on yhtä kuin ${vastaus}°C.`;
}