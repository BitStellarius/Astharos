/* Deklaration aller Variablen für Sounds */

const chapterFlip = document.getElementById("sfxChapterFlip"); // Sound für Umblättern eines Kapitels
const pageFlip1 = document.getElementById("sfxPageFlip1"); // Sound für Umblättern einer Seite 1
const pageFlip2 = document.getElementById("sfxPageFlip2"); // Sound für Umblättern einer Seite 2
const pageFlip3 = document.getElementById("sfxPageFlip3"); // Sound für Umblättern einer Seite 3

const pageFlip = [pageFlip1, pageFlip2, pageFlip3]; // Array aller Sounds für Umblättern einer Seite

/* Random number generator für zufällige Sounds */

let rng = num => {
  return Math.floor(Math.random() * num);
}

/* Deklaration aller Variablen für Buttons */

// TTRPG
const ttrpgBtn1 = document.getElementsByClassName("questionBox")[0];
const ttrpgBtn2 = document.getElementsByClassName("questionBox")[1];
const ttrpgBtn3 = document.getElementsByClassName("questionBox")[2];
const ttrpgBtn4 = document.getElementsByClassName("questionBox")[3];

/* Event Listener */

//TTRPG
ttrpgBtn1.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
ttrpgBtn2.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
ttrpgBtn3.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
ttrpgBtn4.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});