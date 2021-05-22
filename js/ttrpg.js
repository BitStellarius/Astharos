/* Deklaration Variablen für TTRPG Navigation */
var wasIst = document.getElementsByClassName("questionBox")[0];
var wie = document.getElementsByClassName("questionBox")[1];
var wasBraucht = document.getElementsByClassName("questionBox")[2];
var welche = document.getElementsByClassName("questionBox")[3];

var wasIstBox = document.getElementById("wasIst");
var wieBox = document.getElementById("wieFunktioniert");
var wasBrauchtBox = document.getElementById("wasBraucheIch");
var welcheBox = document.getElementById("welcheAufgabe");

function hideAll(){
    wasIst.children[0].style.visibility = "hidden";
    wie.children[0].style.visibility = "hidden";
    wasBraucht.children[0].style.visibility = "hidden";
    welche.children[0].style.visibility = "hidden";
}

function hideAllBoxes(){
    wasIstBox.style.display = "none";
    wieBox.style.display = "none";
    wasBrauchtBox.style.display = "none";
    welcheBox.style.display = "none";
}
/* *********************************************************************** */

/* Event Listener der Navigation in TTRPG */
wasIst.addEventListener("click", function(){
    hideAll();
    wasIst.children[0].style.visibility = "visible";

    hideAllBoxes();
    wasIstBox.style.display = "block";

    wasIstBox.querySelector(".anchor").scrollIntoView({ behavior: 'smooth', block: 'start'});
});

wie.addEventListener("click", function(){
    hideAll();
    wie.children[0].style.visibility = "visible";

    hideAllBoxes();
    wieBox.style.display = "block";

    wieBox.querySelector(".anchor").scrollIntoView({ behavior: 'smooth', block: 'start'});
});

wasBraucht.addEventListener("click", function(){
    hideAll();
    wasBraucht.children[0].style.visibility = "visible";

    hideAllBoxes();
    wasBrauchtBox.style.display = "block";

    wasBrauchtBox.querySelector(".anchor").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

welche.addEventListener("click", function(){
    hideAll();
    welche.children[0].style.visibility = "visible";

    hideAllBoxes();
    welcheBox.style.display = "block";

    welcheBox.querySelector(".anchor").scrollIntoView({ behavior: 'smooth', block: 'start' });
});
/* *********************************************************************** */

/* Change Picture in "Was brauche ich für ein TTRPG?" */
var housePicture = document.getElementById("housePicture");
document.getElementById("regelwerk").addEventListener("click", function(){
    housePicture.src = "assets/ttrpg/buch.jpg";
});
document.getElementById("charakterboegen").addEventListener("click", function(){
    housePicture.src = "assets/ttrpg/game.jpg";
});
document.getElementById("wuerfel").addEventListener("click", function(){
    housePicture.src = "assets/ttrpg/dice.jpg";
});
document.getElementById("papier").addEventListener("click", function(){
    housePicture.src = "assets/ttrpg/bleistift.jpg";
});
document.getElementById("sichtschutz").addEventListener("click", function(){
    housePicture.src = "assets/PlatzhalterRot.png";
});
document.getElementById("geschichte").addEventListener("click", function(){
    housePicture.src = "assets/ttrpg/geschichte.jpg";
});
document.getElementById("leiter").addEventListener("click", function(){
    housePicture.src = "assets/PlatzhalterBlau.png";
});
document.getElementById("multiplayer").addEventListener("click", function(){
    housePicture.src = "assets/PlatzhalterRot.png";
});
/* *********************************************************************** */

/* Onload */
function loadTTRPG(){
    hideAll();
    wasIst.children[0].style.visibility = "visible";

    wieBox.style.display = "none";
    wasBrauchtBox.style.display = "none";
    welcheBox.style.display = "none";
}
/* *********************************************************************** */