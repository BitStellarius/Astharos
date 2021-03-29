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

wasIst.addEventListener("click", function(){
    console.log("wasIst");
    hideAll();
    wasIst.children[0].style.visibility = "visible";

    hideAllBoxes();
    wasIstBox.style.display = "block";
});

wie.addEventListener("click", function(){
    console.log("wie");
    hideAll();
    wie.children[0].style.visibility = "visible";

    hideAllBoxes();
    wieBox.style.display = "block";
});

wasBraucht.addEventListener("click", function(){
    console.log("wasBraucht");
    hideAll();
    wasBraucht.children[0].style.visibility = "visible";

    hideAllBoxes();
    wasBrauchtBox.style.display = "block";
});

welche.addEventListener("click", function(){
    console.log("welche");
    hideAll();
    welche.children[0].style.visibility = "visible";

    hideAllBoxes();
    welcheBox.style.display = "block";
});

window.onload = function(){
    hideAll();
    wasIst.children[0].style.visibility = "visible";

    wieBox.style.display = "none";
    wasBrauchtBox.style.display = "none";
    welcheBox.style.display = "none";
}