/* Change Side in "Magie" */


function hideRightSideBoxes(){
    var boxes = document.getElementsByClassName("rightSideBox");
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display = "none";
    }
}

document.getElementById("element").addEventListener("click", function(){
    console.log("Element");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[0].style.display = "block";
});
document.getElementById("natur").addEventListener("click", function(){
    console.log("natur");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[1].style.display = "block";
});
document.getElementById("schutz").addEventListener("click", function(){
    console.log("schutz");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[2].style.display = "block";
});
document.getElementById("beschwoer").addEventListener("click", function(){
    console.log("beschwoer");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[3].style.display = "block";
});
document.getElementById("illusion").addEventListener("click", function(){
    console.log("illusion");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[4].style.display = "block";
});
document.getElementById("wiederher").addEventListener("click", function(){
    console.log("wiederher");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[5].style.display = "block";
});
document.getElementById("bannmagie").addEventListener("click", function(){
    console.log("bannmagie");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[6].style.display = "block";
});
document.getElementById("fortbewegung").addEventListener("click", function(){
    console.log("fortbewegung");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[7].style.display = "block";
});
document.getElementById("wissens").addEventListener("click", function(){
    console.log("wissens");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[8].style.display = "block";
});
document.getElementById("verstaerkung").addEventListener("click", function(){
    console.log("verstaerkung");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[9].style.display = "block";
});
document.getElementById("dunkle").addEventListener("click", function(){
    console.log("dunkle");
    hideRightSideBoxes();
    document.getElementsByClassName("rightSideBox")[10].style.display = "block";
});
/* *********************************************************************** */

/* Right Side Icons Change */
document.getElementById("infoIcon").addEventListener("click", function(){
    console.log("infoIcon");
});
document.getElementById("rassenIcon").addEventListener("click", function(){
    console.log("rassenIcon");
});
document.getElementById("religionIcon").addEventListener("click", function(){
    console.log("religionIcon");
});
document.getElementById("magieIcon").addEventListener("click", function(){
    console.log("magieIcon");
});
/* *********************************************************************** */

/* */
/* *********************************************************************** */

window.onload = function(){
    document.getElementsByClassName("rightSideBox")[0].style.display = "block";
}