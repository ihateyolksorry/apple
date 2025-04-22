let music;
let started = false;

function preload() {
  soundFormats('mp3');
  music = loadSound('music.mp3');
}

function setup() {
  noCanvas(); // No drawing on this page
}

function mousePressed() {
  if (!started && music) {
    music.setVolume(0.7);
    music.loop();
    started = true;
  }
}
