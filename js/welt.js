/* Change Side in "Magie" */
/* Funktionen */
function hideLeftBookSide(){
    document.getElementById("indexLeft").style.display = "none";
    document.getElementById("rassenLeft").style.display = "none";
    document.getElementById("religionLeft").style.display = "none";
    document.getElementById("elementarmagieLeft").style.display = "none";
}

function hideRightSideBoxes(){
    var boxes = document.getElementsByClassName("rightSideBox");
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display = "none";
    }
}

function hideBoxesAndShowBox(id){
    hideRightSideBoxes();
    console.log(id);
    document.getElementById(id).style.display = "block";
}

function allIconsWhite(){
    document.getElementById("infoIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_Info_w.svg";
    document.getElementById("rassenIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_Rassen_w.svg";
    document.getElementById("religionIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_religion_w.svg";
    document.getElementById("magieIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_magie_w.svg";
}

function showIndex(){
    hideRightSideBoxes();

    hideLeftBookSide();
    document.getElementById("indexLeft").style.display = "block";
    allIconsWhite();
    document.getElementById("infoIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_Info_r.svg";
}
function showReligion(){
    hideRightSideBoxes();
    hideBoxesAndShowBox("thyrosRight");
    hideLeftBookSide();
    document.getElementById("religionLeft").style.display = "block";
    allIconsWhite();
    document.getElementById("religionIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_religion_r.svg";
}
function showRassen(){
    hideRightSideBoxes();
    hideBoxesAndShowBox("orksRight");
    hideLeftBookSide();
    document.getElementById("rassenLeft").style.display = "block";
    allIconsWhite();
    document.getElementById("rassenIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_Rassen_r.svg";
}
function showMagie(){
    hideRightSideBoxes();
    hideBoxesAndShowBox("elementRight");
    hideLeftBookSide();
    document.getElementById("elementarmagieLeft").style.display = "block";
    allIconsWhite();
    document.getElementById("magieIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_magie_r.svg";
}
/* *********************************************************************** */

/* Rassen Click Listener */
document.getElementById("indexRassen").addEventListener("click", function(){
    showRassen();
});
document.getElementById("indexReligion").addEventListener("click", function(){
    showReligion();
});
document.getElementById("indexMagie").addEventListener("click", function(){
    showMagie();
});
/* *********************************************************************** */

/* Rassen Click Listener */
document.getElementById("orks").addEventListener("click", function(){
    hideBoxesAndShowBox("orksRight");
});
document.getElementById("elben").addEventListener("click", function(){
    hideBoxesAndShowBox("elbenRight");
});
document.getElementById("halbElben").addEventListener("click", function(){
    hideBoxesAndShowBox("halbElbenRight");
});
document.getElementById("halbling").addEventListener("click", function(){
    hideBoxesAndShowBox("halblingRight");
});
document.getElementById("zwerge").addEventListener("click", function(){
    hideBoxesAndShowBox("zwergeRight");
});
document.getElementById("katzenmenschen").addEventListener("click", function(){
    hideBoxesAndShowBox("katzenmenschenRight");
});
document.getElementById("mischwesen").addEventListener("click", function(){
    hideBoxesAndShowBox("mischwesenRight");
});
/* *********************************************************************** */

/* Religion Click Listener */
document.getElementById("thyros").addEventListener("click", function(){
    hideBoxesAndShowBox("thyrosRight");
});
document.getElementById("aris").addEventListener("click", function(){
    hideBoxesAndShowBox("arisRight");
});
document.getElementById("begrend").addEventListener("click", function(){
    hideBoxesAndShowBox("begrendRight");
});
document.getElementById("arphen").addEventListener("click", function(){
    hideBoxesAndShowBox("arphenRight");
});
document.getElementById("trendir").addEventListener("click", function(){
    hideBoxesAndShowBox("trendirRight");
});
document.getElementById("gilith").addEventListener("click", function(){
    hideBoxesAndShowBox("gilithRight");
});
document.getElementById("trados").addEventListener("click", function(){
    hideBoxesAndShowBox("tradosRight");
});
document.getElementById("koshka").addEventListener("click", function(){
    hideBoxesAndShowBox("koshkaRight");
});
document.getElementById("seonora").addEventListener("click", function(){
    hideBoxesAndShowBox("seonoraRight");
});
document.getElementById("ferrumtis").addEventListener("click", function(){
    hideBoxesAndShowBox("ferrumtisRight");
});
document.getElementById("fanuin").addEventListener("click", function(){
    hideBoxesAndShowBox("fanuinRight");
});
document.getElementById("varrakis").addEventListener("click", function(){
    hideBoxesAndShowBox("varrakisRight");
});
document.getElementById("dandulein").addEventListener("click", function(){
    hideBoxesAndShowBox("danduleinRight");
});
/* *********************************************************************** */

/* Magie Click Listener */
document.getElementById("element").addEventListener("click", function(){
    hideBoxesAndShowBox("elementRight");
});
document.getElementById("natur").addEventListener("click", function(){
    hideBoxesAndShowBox("naturRight");
});
document.getElementById("schutz").addEventListener("click", function(){
    hideBoxesAndShowBox("schutzRight");
});
document.getElementById("beschwoer").addEventListener("click", function(){
    hideBoxesAndShowBox("beschwoerRight");
});
document.getElementById("illusion").addEventListener("click", function(){
    hideBoxesAndShowBox("illusionRight");
});
document.getElementById("wiederher").addEventListener("click", function(){
    hideBoxesAndShowBox("wiederherRight");
});
document.getElementById("bannmagie").addEventListener("click", function(){
    hideBoxesAndShowBox("bannmagieRight");
});
document.getElementById("fortbewegung").addEventListener("click", function(){
    hideBoxesAndShowBox("fortbewegungRight");
});
document.getElementById("wissens").addEventListener("click", function(){
    hideBoxesAndShowBox("wissensRight");
});
document.getElementById("veraenderung").addEventListener("click", function(){
    hideBoxesAndShowBox("veraenderungRight");
});
document.getElementById("dunkle").addEventListener("click", function(){
    hideBoxesAndShowBox("dunkleRight");
});
/* *********************************************************************** */

/* Right Side Icons Change */
document.getElementById("infoIcon").addEventListener("click", function(){
    showIndex();
});
document.getElementById("rassenIcon").addEventListener("click", function(){
    showRassen();
});
document.getElementById("religionIcon").addEventListener("click", function(){
    showReligion();
});
document.getElementById("magieIcon").addEventListener("click", function(){
    showMagie();
});
/* *********************************************************************** */

/* Onload */
function loadWelt(){
    console.log("Onload Welt.js")
    hideRightSideBoxes();
    hideLeftBookSide();
    document.getElementById("indexLeft").style.display = "block";
    document.getElementById("infoIcon").src = "assets/introWelt/Intro_Welt_3_Lesezerichen_Info_r.svg";
}
/* *********************************************************************** */