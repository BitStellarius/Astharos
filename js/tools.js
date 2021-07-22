/* Variablen sekundäre Attribute */

let AtkNah = document.getElementById("AtkNah");
let AtkDist = document.getElementById("AtkDist");
let Parade = document.getElementById("Parade");
let Initiative = document.getElementById("Initiative");
let Lebensenergie = document.getElementById("Lebensenergie");
let MentaleGesundheit = document.getElementById("MentaleGesundheit");
let MentaleKraft = document.getElementById("MentaleKraft");

let inputST, inputAU, inputGE, inputIN, inputCH, inputMB, inputMA;

let valAtkNah, valAtkDist, valParade, valInitiative, valLebensenergie, valMentaleGesundheit, valMentaleKraft;

/* Variablen Rabe Mouseover */

let toolsCrow = document.getElementById("toolsCrow");
let toolsSpeech = document.getElementById("toolsSpeech");
let toolsSpeechText = document.getElementById("toolsSpeechText");

function changeVals(){
    inputST = parseInt(document.getElementById("ST").getElementsByTagName("input")[0].value);
    inputAU = parseInt(document.getElementById("AU").getElementsByTagName("input")[0].value);
    inputGE = parseInt(document.getElementById("GE").getElementsByTagName("input")[0].value);
    inputIN = parseInt(document.getElementById("IN").getElementsByTagName("input")[0].value);
    inputCH = parseInt(document.getElementById("CH").getElementsByTagName("input")[0].value);
    inputMB = parseInt(document.getElementById("MB").getElementsByTagName("input")[0].value);
    inputMA = parseInt(document.getElementById("MA").getElementsByTagName("input")[0].value);

    
    valAtkNah = Math.floor((inputST + inputST + inputAU) / 3);
    valAtkDist = Math.floor((inputST + inputGE + inputAU) / 3);
    valParade = Math.floor((inputGE + inputGE + inputAU) / 3);
    valInitiative = Math.floor((inputST + 5) + (inputGE / 2));
    valLebensenergie = Math.floor((inputST + inputST + inputAU) * 3);
    valMentaleGesundheit = Math.floor((inputAU + inputIN + inputMB + inputMB) * 3);
    valMentaleKraft = Math.floor(inputMA * 3 + inputIN);
    
    printVals();
}

function printVals(){
    AtkNah.innerHTML = valAtkNah ;
    AtkDist.innerHTML = valAtkDist ;
    Parade.innerHTML = valParade;
    Initiative.innerHTML = valInitiative ;
    Lebensenergie.innerHTML = valLebensenergie ;
    MentaleGesundheit.innerHTML = valMentaleGesundheit ;
    MentaleKraft.innerHTML = valMentaleKraft ;
}

function loadTools(){
    changeVals()
}

document.getElementById("ST").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("AU").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("GE").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("IN").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("CH").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("MB").getElementsByTagName("input")[0].onchange = function() {changeVals()};
document.getElementById("MA").getElementsByTagName("input")[0].onchange = function() {changeVals()};

toolsCrow.onmouseover=function(){
    toolsSpeech.style.visibility = "visible";
    toolsSpeechText.style.visibility = "visible";
}

toolsCrow.onmouseleave=function(){
    toolsSpeech.style.visibility = "hidden";
    toolsSpeechText.style.visibility = "hidden";
}