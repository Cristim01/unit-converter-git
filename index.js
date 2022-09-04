let meterbtn = document.getElementById("meterb");
let feetbtn = document.getElementById("feetb");
let litersbtn = document.getElementById("litersb");
let galoonsbtn = document.getElementById("galoonsb");
let kilogramsbtn = document.getElementById("kilogramsb");
let poundsbtn = document.getElementById("poundsb");


meterbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("meter").value = input * 0.3048 + " Feet";
})

feetbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("feet").value = input * 3.281 + " Meters";
})

litersbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("liters").value = input * 0.264 + " Galoons";
})

galoonsbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("galoons").value = input * 3.785 + " Liters";
})

kilogramsbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("kilograms").value = input * 2.204 + " Pounds";
})

poundsbtn.addEventListener("click", function(){
    let input = document.getElementById("thenumber").value;
    document.getElementById("pounds").value = input * 0.453 + " Kilograms";
})