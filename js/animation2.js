/* Parallele Animationen */

// Start: Deco Frame rechts
let animFrameDecoRight = anime({
  targets: '#startframeDecoRight',
  translateX: [
    {value: -500, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function playAnimRight() {
  animFrameDecoRight.play();
}

document.getElementById('preloaderButton').addEventListener("click", playAnimRight);


/* Karte Deco Frames Rechts */

//Asthos

let animAsthosDecoRechts = anime({
  targets: '#asthosMauerRechts',
  translateX: [
    {value: -930, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animAsthosRechts() {
  animAsthosDecoRechts.play();
}

document.getElementById('iconAsthos').addEventListener("click", animAsthosRechts);

//Flostapor

let animFlostaporDecoRechts = anime({
  targets: '#flostaporMauerRechts',
  translateX: [
    {value: -1015, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animFlostaporRechts() {
  animFlostaporDecoRechts.play();
}

document.getElementById('iconFlostapor').addEventListener("click", animFlostaporRechts);


//Glarius

let animGlariusDecoRechts = anime({
  targets: '#glariusMauerRechts',
  translateX: [
    {value: -985, duration: 1500},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animGlariusRechts() {
  animGlariusDecoRechts.play();
}

document.getElementById('iconGlarius').addEventListener("click", animGlariusRechts);

//Herbanas

let animHerbanasDecoRechts = anime({
  targets: '#herbanasMauerRechts',
  translateX: [
    {value: -1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animHerbanasRechts() {
  animHerbanasDecoRechts.play();
}

document.getElementById('iconHerbanas').addEventListener("click", animHerbanasRechts);

//Miratan

let animMiratanDecoRechts = anime({
  targets: '#miratanMauerRechts',
  translateX: [
    {value: -900, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animMiratanRechts() {
  animMiratanDecoRechts.play();
}

document.getElementById('iconMiratan').addEventListener("click", animMiratanRechts);

//Nuberios

let animNuberiosDecoRechts = anime({
  targets: '#nuberiosMauerRechts',
  translateX: [
    {value: -1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animNuberiosRechts() {
  animNuberiosDecoRechts.play();
}

document.getElementById('iconNuberios').addEventListener("click", animNuberiosRechts);

//Thondbaran

let animThondbaranDecoRechts = anime({
  targets: '#thondbaranMauerRechts',
  translateX: [
    {value: -1000, duration: 2000},
  ],
  easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function animThondbaranRechts() {
  animThondbaranDecoRechts.play();
}

document.getElementById('iconThondbaren').addEventListener("click", animThondbaranRechts);