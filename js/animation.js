/* Animationen */
/*
// Start: Deco Frame links
let animFrameDecoLeft = anime({
  targets: '#startframeDecoLeft',
  translateX: [
    {value: 500, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});


function playAnimLeft() {
  animFrameDecoLeft.play();
}

document.getElementById('preloaderButton').addEventListener("click", playAnimLeft);
*/

/* Welt: Ketten */
let triggerCheck = 0;

let animKetten = anime({
  targets: '#animationsfilmWeltBox',
  translateY: [
    {value: -570, duration: 2500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});


var kettenWP = new Waypoint({
  element: document.getElementById('rahmen2'),
  handler: function() {
    if (triggerCheck === 0) {
      animKetten.play();
      triggerCheck++;
    }
  },
  offset: -200
});

/* Karte Deco Frames Links */

//Asthos

let animAsthosDecoLeft = anime({
  targets: '#asthosMauerLinks',
  translateX: [
    {value: 990, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animAsthosLinks() {
  animAsthosDecoLeft.play();
}

document.getElementById('iconAsthos').addEventListener("click", animAsthosLinks);

//Flostapor

let animFlostaporDecoLinks = anime({
  targets: '#flostaporMauerLinks',
  translateX: [
    {value: 1000, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animFlostaporLinks() {
  animFlostaporDecoLinks.play();
}

document.getElementById('iconFlostapor').addEventListener("click", animFlostaporLinks);



//Glarius

let animGlariusDecoLinks = anime({
  targets: '#glariusMauerLinks',
  translateX: [
    {value: 1000, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animGlariusLinks() {
  animGlariusDecoLinks.play();
}

document.getElementById('iconGlarius').addEventListener("click", animGlariusLinks);

//Herbanas

let animHerbanasDecoLinks = anime({
  targets: '#herbanasMauerLinks',
  translateX: [
    {value: 1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animHerbanasLinks() {
  animHerbanasDecoLinks.play();
}

document.getElementById('iconHerbanas').addEventListener("click", animHerbanasLinks);

//Miratan

let animMiratanDecoLinks = anime({
  targets: '#miratanMauerLinks',
  translateX: [
    {value: 980, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animMiratanLinks() {
  animMiratanDecoLinks.play();
}

document.getElementById('iconMiratan').addEventListener("click", animMiratanLinks);

//Nuberios

let animNuberiosDecoLinks = anime({
  targets: '#nuberiosMauerLinks',
  translateX: [
    {value: 1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animNuberiosLinks() {
  animNuberiosDecoLinks.play();
}

document.getElementById('iconNuberios').addEventListener("click", animNuberiosLinks);

//Thondbaran

let animThondbaranDecoLinks = anime({
  targets: '#thondbaranMauerLinks',
  translateX: [
    {value: 1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animThondbaranLinks() {
  animThondbaranDecoLinks.play();
}

document.getElementById('iconThondbaren').addEventListener("click", animThondbaranLinks);


