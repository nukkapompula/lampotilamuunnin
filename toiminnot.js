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
            celsiusF();
        } else {
            fahrenheitC();
        }
        document.getElementById("lukema").value = "";
    }
    
    vastausRivi.style.display = "block";
}

function celsiusF(event){
    console.log("celsius-fahreheit, vai?")
}

function fahrenheitC(event){
    console.log("äffästä ceehen, okay")
}