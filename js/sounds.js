/* Deklaration aller Variablen für Sounds */
const allAudio = [];
allAudio.push(document.getElementById("sfxChapterFlip"));//0 ChapterFlip
allAudio.push(document.getElementById("sfxPageFlip1"));//1 Page Flip
allAudio.push(document.getElementById("sfxPageFlip2"));//2
allAudio.push(document.getElementById("sfxPageFlip3"));//3
allAudio.push(document.getElementById("backgroundMusic"));//4 Background Music
allAudio.push(document.getElementById("atmosAudioAsthos"));//5 Atmos Mobile Version
allAudio.push(document.getElementById("atmosAudioFlostapor"));//6
allAudio.push(document.getElementById("atmosAudioGlarius"));//7
allAudio.push(document.getElementById("atmosAudioHerbanas"));//8
allAudio.push(document.getElementById("atmosAudioMiratan"));//9
allAudio.push(document.getElementById("atmosAudioNuberios"));//10
allAudio.push(document.getElementById("atmosAudioThondbaren"));//11
allAudio.push(document.getElementById("soundAsthos"));//12 Atmos Map
allAudio.push(document.getElementById("soundFlostapor"));//13
allAudio.push(document.getElementById("soundGlarius"));//14
allAudio.push(document.getElementById("soundHerbanas"));//15
allAudio.push(document.getElementById("soundMiratan"));//16
allAudio.push(document.getElementById("soundNuberios"));//17
allAudio.push(document.getElementById("sounThondbaren"));//18
allAudio.push(document.getElementById("diceSound"));//19 Dice Sound

function random(min, max){
  return (Math.floor(Math.random() * max) + min);
}

function randomPageflip(){
  allAudio[random(1, 3)].play();
}

/* Deklaration aller Variablen für Buttons */
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
    randomPageflip();
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
    allAudio[0].play();
  });
});

const ttrpgWasBraucheIchButtons = [];
ttrpgWasBraucheIchButtons.push(document.getElementById("regelwerk"));
ttrpgWasBraucheIchButtons.push(document.getElementById("charakterboegen"));
ttrpgWasBraucheIchButtons.push(document.getElementById("wuerfel"));
ttrpgWasBraucheIchButtons.push(document.getElementById("papier"));
ttrpgWasBraucheIchButtons.push(document.getElementById("sichtschutz"));
ttrpgWasBraucheIchButtons.push(document.getElementById("geschichte"));
ttrpgWasBraucheIchButtons.push(document.getElementById("leiter"));
ttrpgWasBraucheIchButtons.push(document.getElementById("multiplayer"));

ttrpgWasBraucheIchButtons.forEach(function(item, index){
  item.addEventListener("click", function(){
    randomPageflip();
  });
});

const volumeSlider = document.getElementById("volumeSlider");
var volume;
const volButton = document.getElementById("navVolBtn");
const muteButton = document.getElementById("navMuteBtn");

const mobileVolButton = document.getElementById("mobilenavVolBtn");
const mobileMuteButton = document.getElementById("mobilenavMuteBtn");


function setVolume(){
  allAudio.forEach(function(item, index){
    item.volume = volume;
  });
}

function getVolume(){
  volume = (volumeSlider.value / 100);
  if(volume > 0.99){
    volume = 0.99;
  }
}

function muteSound(){
  allAudio.forEach(function(item, index){
    item.pause();
  });
  volButton.style.display = "none";
  muteButton.style.display = "block";

  mobileVolButton.style.display = "none";
  mobileMuteButton.style.display = "block";
}
function unmuteSound(){
  fadeInBackgroundMusic();
  volButton.style.display = "block";
  muteButton.style.display = "none";

  mobileVolButton.style.display = "block";
  mobileMuteButton.style.display = "none";
}

function fadeInBackgroundMusic(){
  getVolume();
  allAudio[4].volume = 0;
  allAudio[4].play();
  var fadeInAudio = setInterval(function(){
    if(allAudio[4].volume < volume){
      if(allAudio[4].volume >= 1){
        allAudio[4].volume = 1;
        clearInterval(fadeInAudio);
      }
      else{
        allAudio[4].volume += 0.01;
      }
    }
    else{
      clearInterval(fadeInAudio);
    }
  },200);
}

function playBackgroundMusic(){
  fadeInBackgroundMusic();
}

function pauseBackgroundMusic(){
  var fadeOutAudio = setInterval(function(){
    if(allAudio[4].volume <= 0.1){
      allAudio[4].volume = 0;
      clearInterval(fadeOutAudio);
    }
    else{
      allAudio[4].volume -= 0.1;
    }
  },200);
  allAudio[4].pause();
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
for(let i = 5; i <= 11; i++){
  allAudio[i].onplay = function(){
    pauseAtmos(allAudio[i]);
    pauseBackgroundMusic();
    console.log(i);
  }
}
for(let i = 5; i <= 11; i++){
  allAudio[i].onpause = function(){
    //playBackgroundMusic();
  }
}

//Map Atmos
function pauseAtmos(atmo){
  for(let i = 5; i <= 11; i++){
    if(atmo !== allAudio[i]){
      allAudio[i].pause();
    }
  }
}

function pauseMapAtmos(){
  for(let i = 12; i <= 18; i++){
    allAudio[i].pause();
  }
}

