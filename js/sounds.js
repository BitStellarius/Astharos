/* Deklaration aller Variablen für Sounds */

const chapterFlip = document.getElementById("sfxChapterFlip"); // Sound für Umblättern eines Kapitels
const pageFlip1 = document.getElementById("sfxPageFlip1"); // Sound für Umblättern einer Seite 1
const pageFlip2 = document.getElementById("sfxPageFlip2"); // Sound für Umblättern einer Seite 2
const pageFlip3 = document.getElementById("sfxPageFlip3"); // Sound für Umblättern einer Seite 3

const pageFlip = [pageFlip1, pageFlip2, pageFlip3]; // Array aller Sounds für Umblättern einer Seite

const backgroundMusic = document.getElementById("backgroundMusic");
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

// Welt
const indexRassenBtn = document.getElementById("indexRassen");
const indexReligionBtn = document.getElementById("indexReligion");
const indexMagieBtn = document.getElementById("indexMagie");
const orksBtn = document.getElementById("orks");
const elbenBtn = document.getElementById("elben");
const halbElbenBtn = document.getElementById("halbElben");
const halblingBtn = document.getElementById("halbling");
const zwergeBtn = document.getElementById("zwerge");
const katzenmenschenMagieBtn = document.getElementById("katzenmenschen");
const mischwesenBtn = document.getElementById("mischwesen");
const thyrosBtn = document.getElementById("thyros");
const arisBtn = document.getElementById("aris");
const begrendBtn = document.getElementById("begrend");
const arphenBtn = document.getElementById("arphen");
const trendirBtn = document.getElementById("trendir");
const tradosBtn = document.getElementById("trados");
const koshkaBtn = document.getElementById("koshka");
const seonoraBtn = document.getElementById("seonora");
const ferrumtisBtn = document.getElementById("ferrumtis");
const fanuinBtn = document.getElementById("fanuin");
const varrakisBtn = document.getElementById("varrakis");
const danduleinBtn = document.getElementById("dandulein");
const elementBtn = document.getElementById("element");
const naturBtn = document.getElementById("natur");
const schutzBtn = document.getElementById("schutz");
const beschwoerBtn = document.getElementById("beschwoer");
const illusionBtn = document.getElementById("illusion");
const wiederherBtn = document.getElementById("wiederher");
const bannmagieBtn = document.getElementById("bannmagie");
const fortbewegungBtn = document.getElementById("fortbewegung");
const wissensBtn = document.getElementById("wissens");
const veraenderungBtn = document.getElementById("veraenderung");
const dunkleBtn = document.getElementById("dunkle");
const infoIconBtn = document.getElementById("infoIcon");
const rassenIconBtn = document.getElementById("rassenIcon");
const religionIconBtn = document.getElementById("religionIcon");
const magieIconBtn = document.getElementById("magieIcon");


const volumeSlider = document.getElementById("volumeSlider");
var volume;
const volButton = document.getElementById("navVolBtn");
const muteButton = document.getElementById("navMuteBtn");

function setVolume(){
  chapterFlip.volume = volume;
  pageFlip1.volume = volume;
  pageFlip2.volume = volume;
  pageFlip3.volume = volume;
  backgroundMusic.volume = volume;
}

function muteSound(){
  chapterFlip.muted = true;
  pageFlip1.muted = true;
  pageFlip2.muted = true;
  pageFlip3.muted = true;
  backgroundMusic.muted = true;
  volButton.style.display = "none";
  muteButton.style.display = "block";
}
function unmuteSound(){
  chapterFlip.muted = false;
  pageFlip1.muted = false;
  pageFlip2.muted = false;
  pageFlip3.muted = false;
  backgroundMusic.muted = false;
  volButton.style.display = "block";
  muteButton.style.display = "none";
}

function playBackgroundMusic(){
  backgroundMusic.play();
}


/* Event Listener */
//Mute/Unmute Button
volButton.addEventListener("click",function(){
  muteSound();
});
muteButton.addEventListener("click",function(){
  unmuteSound();
});

//Input Slider
volumeSlider.addEventListener("input", function(){
  volume = (volumeSlider.value / 100);
  setVolume(); 
  unmuteSound();
});

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

//Welt
indexRassenBtn.addEventListener("click", function(){
  chapterFlip.play();
});
indexReligionBtn.addEventListener("click", function(){
  chapterFlip.play();
});
indexMagieBtn.addEventListener("click", function(){
  chapterFlip.play();
});
infoIconBtn.addEventListener("click", function(){
  chapterFlip.play();
});
rassenIconBtn.addEventListener("click", function(){
  chapterFlip.play();
});
religionIconBtn.addEventListener("click", function(){
  chapterFlip.play();
});
magieIconBtn.addEventListener("click", function(){
  chapterFlip.play();
});

orksBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
elbenBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
halbElbenBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
halblingBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
zwergeBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
katzenmenschenMagieBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
mischwesenBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
thyrosBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
arisBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
begrendBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
arphenBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
trendirBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
tradosBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
koshkaBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
seonoraBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
ferrumtisBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
fanuinBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
varrakisBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
danduleinBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
elementBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
naturBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
schutzBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
beschwoerBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
illusionBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
wiederherBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
bannmagieBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
fortbewegungBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
wissensBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
veraenderungBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});
dunkleBtn.addEventListener("click", function(){
  pageFlip[rng(3)].play();
});