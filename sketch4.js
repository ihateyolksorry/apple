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
  noStroke();
}

function draw() {
  clear();
  for (let i = apples.length - 1; i >= 0; i--) {
    let a = apples[i];
    image(appleImage, a.x, a.y, 40, 40);
    a.y += a.speed;
    a.speed += 0.2;
    if (a.y > height + 40) apples.splice(i, 1);
  }
}

function mousePressed() {
  apples.push({
    x: mouseX - 20,
    y: mouseY - 20,
    speed: 2
  });
}
