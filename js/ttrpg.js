/* Deklaration Variablen für TTRPG Navigation */
var wasIst = document.getElementsByClassName("questionBox")[0];
var wie = document.getElementsByClassName("questionBox")[1];
var wasBraucht = document.getElementsByClassName("questionBox")[2];
var welche = document.getElementsByClassName("questionBox")[3];

var wasIstBox = document.getElementById("wasIst");
var wieBox = document.getElementById("wieFunktioniert");
var wasBrauchtBox = document.getElementById("wasBraucheIch");
var welcheBox = document.getElementById("welcheAufgabe");

let ttrpgCrow = document.getElementById("crowTTRPG");
let sprechblase = document.getElementById("sprechblase");
let sprechblaseText = document.getElementById("sprechblaseText");

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
var rollePicture = document.getElementById("rollePicture");
document.getElementById("regelwerk").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/buch.jpg";
});
document.getElementById("charakterboegen").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/game.jpg";
});
document.getElementById("wuerfel").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/dice.jpg";
});
document.getElementById("papier").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/bleistift.jpg";
});
document.getElementById("sichtschutz").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/sichtschutz.webp";
});
document.getElementById("geschichte").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/geschichte.jpg";
});
document.getElementById("leiter").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/dungeonmaster.jpg";
});
document.getElementById("multiplayer").addEventListener("click", function(){
    rollePicture.src = "assets/ttrpg/party.png";
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

/* Mouseover Krähe */

ttrpgCrow.onmouseover=function(){
    unfade(sprechblase);
    unfade(sprechblaseText);  
}

ttrpgCrow.onmouseleave=function(){
    fade(sprechblase);
    fade(sprechblaseText);
}