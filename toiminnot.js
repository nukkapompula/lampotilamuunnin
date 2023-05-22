let syote = document.getElementById("lukema").value;
let muunnaPainike = document.getElementById("painike");
let vastausRivi = document.getElementById("muunnos");

muunnaPainike.addEventListener("click", tarkastus);

function tarkastus(event){
    event.preventDefault();
    if(syote.length < 1){
        vastausRivi.innerHTML = "Et antanut muunnettavaa arvoa.";
        syote.value = "";
    }
    
    vastausRivi.style.display = "block";
    // vastausRivi.innerHTML = "painoit nappia";
}