/* Animationen */

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

// Start: Deco Frame links
let animKetten = anime({
  targets: '#animationsfilmWeltBox',
  translateY: [
    {value: -570, duration: 4000},
  ],
  //easing: 'easeOutSine',
  loop: false,
  autoplay: false
});

function playAnimKetten() {
  animKetten.play();
  document.getElementById('testUber').removeEventListener("click", playAnimKetten);
}

document.getElementById('testUber').addEventListener("click", playAnimKetten);