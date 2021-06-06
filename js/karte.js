/* Funktionen */
function scrollIntoAnchor(id){
    document.getElementById(id).querySelector(".anchor").scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function hideAllCitys(){
    var staedte = document.getElementsByClassName("stadtDiv");
    for(var i = 0; i < staedte.length; i++){
        staedte[i].style.display = "none";
    }
}
function backToTheMap(){
    console.log("back");
    /*hideAllCitys();
    document.getElementById("karteBild").style.display ="block";
    document.getElementById("kartenDiv").classList.add("backgroundWood");*/

    scrollIntoAnchor("kartenDiv");
}



/* Click Listener Icons Karte */
document.getElementById("iconAsthos").addEventListener("click", function(){
    console.log("iconAsthos");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtAsthos").style.display = "block";

    scrollIntoAnchor("stadtAsthos");
});
document.getElementById("iconFlostapor").addEventListener("click", function(){
    console.log("iconFlostapor");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtFlostapor").style.display = "block";
    
    scrollIntoAnchor("stadtFlostapor");
});
document.getElementById("iconGlarius").addEventListener("click", function(){
    console.log("iconGlarius");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtGlarius").style.display = "block";
    
    scrollIntoAnchor("stadtGlarius");
});
document.getElementById("iconHerbanas").addEventListener("click", function(){
    console.log("iconHerbanas");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtHerbanas").style.display = "block";
    
    scrollIntoAnchor("stadtHerbanas");
});
document.getElementById("iconMiratan").addEventListener("click", function(){
    console.log("iconMiratan");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtMiratan").style.display = "block";
    
    scrollIntoAnchor("stadtMiratan");
});
document.getElementById("iconNuberios").addEventListener("click", function(){
    console.log("iconNuberios");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtNuberios").style.display = "block";
    
    scrollIntoAnchor("stadtNuberios");
});
document.getElementById("iconThondbaren").addEventListener("click", function(){
    console.log("iconThondbaren");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtThondbaran").style.display = "block";
    
    scrollIntoAnchor("stadtThondbaran");
});


loadKarte();

/* Onload */
function loadKarte(){
    /* Click Listener Back Buttons */
    var backBtns = document.getElementsByClassName("backToMap");
    for(var i = 0; i <backBtns.length; i++){
        backBtns[i].addEventListener("click", backToTheMap);
    }
}
/* *********************************************************************** */