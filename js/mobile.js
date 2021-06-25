var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Change Picture in "Was brauche ich für ein TTRPG?" */
var mobileWasBraucheBild = document.getElementById("mobileWasBraucheBild");
document.getElementById("mobRegelwerk").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/ttrpg/buch.jpg";
});
document.getElementById("mobCharakterbogen").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/ttrpg/game.jpg";
});
document.getElementById("mobWuerfel").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/ttrpg/dice.jpg";
});
document.getElementById("mobPapier").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/ttrpg/bleistift.jpg";
});
document.getElementById("mobSichtschutz").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/PlatzhalterRot.png";
});
document.getElementById("mobGeschichte").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/ttrpg/geschichte.jpg";
});
document.getElementById("mobSpielleiter").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/PlatzhalterBlau.png";
});
document.getElementById("mobSpieler").addEventListener("click", function(){
    mobileWasBraucheBild.src = "assets/PlatzhalterRot.png";
});
/* *********************************************************************** */