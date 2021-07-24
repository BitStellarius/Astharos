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

// Welt: Ketten
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