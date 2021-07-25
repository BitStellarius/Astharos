var zahl = document.getElementById("diceZahl");

/*
var diceSeitenanzahl, diceSeiten;
*/

/*
document.getElementById("rollDiceBtn").onclick = function() {
    rollDice();
};
*/

/*
document.getElementById("radioField").onchange = function(){
    rollDice();
}

function getRadio(){
    diceSeiten = document.getElementsByName("Seitenzahl");
    for(var i = 0; i < diceSeiten.length; i++){
        if(diceSeiten[i].checked){
            diceSeitenanzahl = diceSeiten[i].value;
        }
    }
}
*/

/*    
function rollDice(){
    getRadio();
    zahl.innerHTML = Math.floor(Math.random() * diceSeitenanzahl) + 1;
}
*/

document.getElementById("roll20").onclick = function() {
    rollDice(20);
};
document.getElementById("roll6").onclick = function() {
    rollDice(6);
};
document.getElementById("roll100").onclick = function() {
    rollDice(100);
};

function rollDice(anzahl){
    zahl.innerHTML = Math.floor(Math.random() * anzahl) + 1;
}

function loadRollDice(){
    rollDice(20);
}