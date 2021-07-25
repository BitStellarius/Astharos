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
/*
// TTRPG
const ttrpgBtn1 = document.getElementsByClassName("questionBox")[0];
const ttrpgBtn2 = document.getElementsByClassName("questionBox")[1];
const ttrpgBtn3 = document.getElementsByClassName("questionBox")[2];
const ttrpgBtn4 = document.getElementsByClassName("questionBox")[3];
*/
// Welt
const buttonsArray = [];
buttonsArray.push(document.getElementsByClassName("questionBox")[0]);
buttonsArray.push(document.getElementsByClassName("questionBox")[1]);
buttonsArray.push(document.getElementsByClassName("questionBox")[2]);
buttonsArray.push(document.getElementsByClassName("questionBox")[3]);


buttonsArray.push(document.getElementById("orks"));
buttonsArray.push(document.getElementById("elben"));
buttonsArray.push(document.getElementById("halbElben"));
buttonsArray.push(document.getElementById("halbling"));
buttonsArray.push(document.getElementById("zwerge"));
buttonsArray.push(document.getElementById("katzenmenschen"));
buttonsArray.push(document.getElementById("mischwesen"));
buttonsArray.push(document.getElementById("thyros"));
buttonsArray.push(document.getElementById("aris"));
buttonsArray.push(document.getElementById("begrend"));
/*buttonsArray.push(document.getElementById("arphen"));*/
buttonsArray.push(document.getElementById("trendir"));
buttonsArray.push(document.getElementById("gilith"));
/*buttonsArray.push(document.getElementById("trados"));*/
buttonsArray.push(document.getElementById("koshka"));
buttonsArray.push(document.getElementById("seonora"));
/*buttonsArray.push(document.getElementById("ferrumtis"));*/
buttonsArray.push(document.getElementById("fanuin"));
buttonsArray.push(document.getElementById("varrakis"));
/*buttonsArray.push(document.getElementById("dandulein"));*/
buttonsArray.push(document.getElementById("element"));
buttonsArray.push(document.getElementById("natur"));
buttonsArray.push(document.getElementById("schutz"));
buttonsArray.push(document.getElementById("beschwoer"));
buttonsArray.push(document.getElementById("illusion"));
buttonsArray.push(document.getElementById("wiederher"));
buttonsArray.push(document.getElementById("bannmagie"));
buttonsArray.push(document.getElementById("fortbewegung"));
buttonsArray.push(document.getElementById("wissens"));
/*buttonsArray.push(document.getElementById("veraenderung"));*/
buttonsArray.push(document.getElementById("dunkle"));

buttonsArray.forEach(function(item, index){
  item.addEventListener("click", function(){
    pageFlip[rng(3)].play();
  });
});

const chapterFlipButtons = [];
chapterFlipButtons.push(document.getElementById("infoIcon"));
chapterFlipButtons.push(document.getElementById("rassenIcon"));
chapterFlipButtons.push(document.getElementById("religionIcon"));
chapterFlipButtons.push(document.getElementById("magieIcon"));
chapterFlipButtons.push(document.getElementById("indexRassen"));
chapterFlipButtons.push(document.getElementById("indexReligion"));
chapterFlipButtons.push(document.getElementById("indexMagie"));

chapterFlipButtons.forEach(function(item, index){
  item.addEventListener("click", function(){
    chapterFlip.play();
  });
});

const volumeSlider = document.getElementById("volumeSlider");
var volume;
const volButton = document.getElementById("navVolBtn");
const muteButton = document.getElementById("navMuteBtn");

const mobileVolButton = document.getElementById("mobilenavVolBtn");
const mobileMuteButton = document.getElementById("mobilenavMuteBtn");


function setVolume(){
  chapterFlip.volume = volume;
  pageFlip1.volume = volume;
  pageFlip2.volume = volume;
  pageFlip3.volume = volume;
  backgroundMusic.volume = volume;
}

function getVolume(){
  volume = (volumeSlider.value / 100);
}

function muteSound(){
  chapterFlip.muted = true;
  pageFlip1.muted = true;
  pageFlip2.muted = true;
  pageFlip3.muted = true;
  backgroundMusic.muted = true;
  volButton.style.display = "none";
  muteButton.style.display = "block";

  mobileVolButton.style.display = "none";
  mobileMuteButton.style.display = "block";
}
function unmuteSound(){
  chapterFlip.muted = false;
  pageFlip1.muted = false;
  pageFlip2.muted = false;
  pageFlip3.muted = false;
  backgroundMusic.muted = false;
  fadeInBackgroundMusic();
  volButton.style.display = "block";
  muteButton.style.display = "none";

  mobileVolButton.style.display = "block";
  mobileMuteButton.style.display = "none";
}

function fadeInBackgroundMusic(){
  getVolume();
  backgroundMusic.volume = 0;
  var fadeInAudio = setInterval(function(){
    if(backgroundMusic.volume < volume){
      backgroundMusic.volume += 0.1;
    }
    else{
      clearInterval(fadeInAudio);
    }
  },200);
}

function playBackgroundMusic(){
  backgroundMusic.play();
  fadeInBackgroundMusic();
}

function pauseBackgroundMusic(){
  var fadeOutAudio = setInterval(function(){
    if(backgroundMusic.volume <= 0.1){
      backgroundMusic.volume = 0;
      clearInterval(fadeOutAudio);
    }
    else{
      backgroundMusic.volume -= 0.1;
    }
  },200);
  backgroundMusic.pause();
}


/* Event Listener */
//Mute/Unmute Button
volButton.addEventListener("click",function(){
  muteSound();
});
muteButton.addEventListener("click",function(){
  unmuteSound();
});

mobileMuteButton.addEventListener("click",function(){
  unmuteSound();
});
mobileVolButton.addEventListener("click",function(){
  muteSound();
  pauseAtmos();
});

//Input Slider
volumeSlider.addEventListener("input", function(){
  getVolume();
  setVolume(); 
  unmuteSound();
});

//Animationsfilm
document.getElementById("animationsfilmWelt").addEventListener("play",function(){
  pauseBackgroundMusic();
});
document.getElementById("animationsfilmWelt").addEventListener("pause",function(){
  playBackgroundMusic();
});

//Mobile Version
const atmosAudio = [];
atmosAudio.push(document.getElementById("atmosAudioAsthos"));
atmosAudio.push(document.getElementById("atmosAudioFlostapor"));
atmosAudio.push(document.getElementById("atmosAudioGlarius"));
atmosAudio.push(document.getElementById("atmosAudioHerbanas"));
atmosAudio.push(document.getElementById("atmosAudioMiratan"));
atmosAudio.push(document.getElementById("atmosAudioNuberios"));
atmosAudio.push(document.getElementById("atmosAudioThondbaren"));

atmosAudio.forEach(function(item, index){
  item.onplay = function(){
    pauseAtmos(item);
    pauseBackgroundMusic();
  };
});
atmosAudio.forEach(function(item, index){
  item.onpause = function(){
    playBackgroundMusic();
  };
});

function pauseAtmos(atmo){
  atmosAudio.forEach(function(item, index){
    if(item !== atmo){
      item.pause();
    }    
  });
}
















/*
const infoIconBtn = document.getElementById("infoIcon");
const rassenIconBtn = document.getElementById("rassenIcon");
const religionIconBtn = document.getElementById("religionIcon");
const magieIconBtn = document.getElementById("magieIcon");
*/
/*
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
 */
/*
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
*/
/*
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
*/
/*
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
*/