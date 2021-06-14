var AtkNah = document.getElementById("AtkNah");
var AtkDist = document.getElementById("AtkDist");
var Parade = document.getElementById("Parade");
var Initiative = document.getElementById("Initiative");
var Lebensenergie = document.getElementById("Lebensenergie");
var MentaleGesundheit = document.getElementById("MentaleGesundheit");
var MentaleKraft = document.getElementById("MentaleKraft");

var inputST, inputAU, inputGE, inputIN, inputCH, inputMB, inputMA;

var valAtkNah, valAtkDist, valParade, valInitiative, valLebensenergie, valMentaleGesundheit, valMentaleKraft;

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
    valInitiative = Math.floor((inputST + 5) - (inputGE / 2));
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