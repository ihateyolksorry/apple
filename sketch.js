let music;
let appleImg;

function preload() {
  music = loadSound('music.mp3');        // 替换为你实际的音乐文件名
  appleImg = loadImage('Apple.gif');     // 注意大小写！你的文件名是大写 A
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  music.setVolume(0.8);
}

function draw() {
  background(220);
  image(appleImg, mouseX, mouseY, 100, 100); // 苹果跟着鼠标动
}

function mousePressed() {
  if (!music.isPlaying()) {
    music.loop();
  }
}

