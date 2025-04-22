let appleImage;
let apples = [];

function preload() {
  appleImage = loadImage('apple.png');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('pointer-events', 'none');
  cnv.style('z-index', '10');
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255);
  noStroke();
}

function draw() {
  clear();

  if (frameCount % 20 === 0) {
    apples.push({
      x: random(width - 40),
      y: -40,
      speed: random(2, 5)
    });
  }

  for (let i = apples.length - 1; i >= 0; i--) {
    let a = apples[i];
    image(appleImage, a.x, a.y, 40, 40);
    a.y += a.speed;
    if (a.y > height + 40) apples.splice(i, 1);
  }
  