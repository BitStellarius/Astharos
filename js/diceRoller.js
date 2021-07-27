var zahl = document.getElementById("diceZahl");

document.getElementById("roll20").onclick = function() {
    allAudio[19].play();
    rollDice(20);
};
document.getElementById("roll6").onclick = function() {
    allAudio[19].play();
    rollDice(6);
};
document.getElementById("roll100").onclick = function() {
    allAudio[19].play();
    rollDice(100);
};

function rollDice(anzahl){
    zahl.innerHTML = Math.floor(Math.random() * anzahl) + 1;
}

function loadRollDice(){
    rollDice(20);
}