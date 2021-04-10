/* Höhe der Navbar beim Scrollen */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("navbar").style.padding = "10px 0";
    } else {
      document.getElementById("navbar").style.padding = "30px 0px";
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

/* Anker anpassen anhand der height der Navbar um nicht zu weit zu scrollen */
var navbarHeight = document.getElementById("navbar").clientHeight;
function setAnchors(){
    var anchors = document.getElementsByClassName("anchor");
    for(var i = 0; i < anchors.length; i++){
        anchors[i].style.position = "absolute";
        anchors[i].style.left = "0";
        anchors[i].style.top = "-" + navbarHeight + "px";
    }
}
/* *********************************************************************** */
