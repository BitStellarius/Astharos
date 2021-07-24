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



