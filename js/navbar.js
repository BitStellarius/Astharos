/* Höhe der Navbar beim Scrollen */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("navbar").style.padding = "5px 0";
      document.getElementById("sliderContainer").style.padding = "0px 75px";
    } else {
      document.getElementById("navbar").style.padding = "30px 0px";
      document.getElementById("sliderContainer").style.padding = "22px 75px";
    }
  }
 /* *********************************************************************** */

 /* Smooth scrollen von a href */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* *********************************************************************** */

/* Gesamte Onload Funktionen */
window.onload = function(){
  loadTTRPG();
  loadWelt();
  loadKarte();
  loadTools();
  loadRollDice();
}
/* *********************************************************************** */