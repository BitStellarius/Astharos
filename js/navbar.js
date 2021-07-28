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
/*
let heightTarget = [];  
heightTarget.push($('#startframe'));
heightTarget.push($('#ttrpfTest'));
heightTarget.push($('#welt'));
heightTarget.push($('#karte'));
heightTarget.push($('#tools'));
heightTarget.push($('#downloads'));

let wH;
let wS;


$(window).scroll(function() {
  wH = $(window).height();
  wS = $(this).scrollTop();

  heightTarget.forEach(function(item){
    let hT = item.offset().top;
    let hH = item.outerHeight();


    //console.log(item.prop('id') + ' test!');

    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      console.log(item.prop('id') + ' on the view!');
    }
  });
});
*/