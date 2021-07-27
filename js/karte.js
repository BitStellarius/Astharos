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

/*
const mapAtmos = [];
mapAtmos.push(document.getElementById("soundAsthos"));
mapAtmos.push(document.getElementById("soundFlostapor"));
mapAtmos.push(document.getElementById("soundGlarius"));
mapAtmos.push(document.getElementById("soundHerbanas"));
mapAtmos.push(document.getElementById("soundMiratan"));
mapAtmos.push(document.getElementById("soundNuberios"));
mapAtmos.push(document.getElementById("sounThondbaren"));
*/
/*
function pauseMapAtmos(){
    mapAtmos.forEach(function(item, index){
        item.pause();
    });
}
*/
function backToTheMap(){
    //console.log("back");
    /*hideAllCitys();
    document.getElementById("karteBild").style.display ="block";
    document.getElementById("kartenDiv").classList.add("backgroundWood");*/
    randomPageflip();
    pauseMapAtmos();
    playBackgroundMusic();
    scrollIntoAnchor("kartenDiv");
}




/* Click Listener Icons Karte */
document.getElementById("iconAsthos").addEventListener("click", function(){
    console.log("iconAsthos");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtAsthos").style.display = "block";

    pauseBackgroundMusic();
    allAudio[12].play();

    scrollIntoAnchor("stadtAsthos");
});
document.getElementById("iconFlostapor").addEventListener("click", function(){
    console.log("iconFlostapor");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtFlostapor").style.display = "block";

    pauseBackgroundMusic();
    allAudio[13].play();
    
    scrollIntoAnchor("stadtFlostapor");
});
document.getElementById("iconGlarius").addEventListener("click", function(){
    console.log("iconGlarius");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtGlarius").style.display = "block";

    pauseBackgroundMusic();
    allAudio[14].play();
    
    scrollIntoAnchor("stadtGlarius");
});
document.getElementById("iconHerbanas").addEventListener("click", function(){
    console.log("iconHerbanas");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtHerbanas").style.display = "block";

    pauseBackgroundMusic();
    allAudio[15].play();
    
    scrollIntoAnchor("stadtHerbanas");
});
document.getElementById("iconMiratan").addEventListener("click", function(){
    console.log("iconMiratan");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtMiratan").style.display = "block";

    pauseBackgroundMusic();
    allAudio[16].play();
    
    scrollIntoAnchor("stadtMiratan");
});
document.getElementById("iconNuberios").addEventListener("click", function(){
    console.log("iconNuberios");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtNuberios").style.display = "block";

    pauseBackgroundMusic();
    allAudio[17].play();
    
    scrollIntoAnchor("stadtNuberios");
});
document.getElementById("iconThondbaren").addEventListener("click", function(){
    console.log("iconThondbaren");
    hideAllCitys();
    /*document.getElementById("karteBild").style.display ="none";
    document.getElementById("kartenDiv").classList.remove("backgroundWood");*/
    document.getElementById("stadtThondbaran").style.display = "block";

    pauseBackgroundMusic();
    allAudio[18].play();
    
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