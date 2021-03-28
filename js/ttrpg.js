var wasIst = document.getElementsByClassName("questionBox")[0];
var wie = document.getElementsByClassName("questionBox")[1];
var wasBraucht = document.getElementsByClassName("questionBox")[2];
var welche = document.getElementsByClassName("questionBox")[3];

function hideAll(){
    wasIst.children[0].style.visibility = "hidden";
    wie.children[0].style.visibility = "hidden";
    wasBraucht.children[0].style.visibility = "hidden";
    welche.children[0].style.visibility = "hidden";
}

wasIst.addEventListener("click", function(){
    console.log("wasIst");
    hideAll();
    wasIst.children[0].style.visibility = "visible";
});

wie.addEventListener("click", function(){
    console.log("wie");
    hideAll();
    wie.children[0].style.visibility = "visible";
});

wasBraucht.addEventListener("click", function(){
    console.log("wasBraucht");
    hideAll();
    wasBraucht.children[0].style.visibility = "visible";
});

welche.addEventListener("click", function(){
    console.log("welche");
    hideAll();
    welche.children[0].style.visibility = "visible";
});

window.onload = function(){
    hideAll();
    wasIst.children[0].style.visibility = "visible";
}