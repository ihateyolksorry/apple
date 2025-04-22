let appleImage;
let basket;
let apples = [];
let score = 0;

function preload() {
  appleImage = loadImage("apple.png");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("pointer-events", "none");
  cnv.style("z-index", "10");
  textFont("sans-serif");

  basket = {
    x: width / 2,
    y: height - 60,
    width: 100,
    height: 40
  };
}

function draw() {
  clear();

  // 生成新苹果
  if (frameCount % 30 === 0) {
    apples.push({
      x: random(width - 40),
      y: -40,
      speed: random(2, 5)
    });
  }

  // 画苹果
  for (let i = apples.length - 1; i >= 0; i--) {
    let a = apples[i];
    image(appleImage, a.x, a.y, 40, 40);
    a.y += a.speed;

    // 判断是否被接住
    if (
      a.y + 40 > basket.y &&
      a.x + 20 > basket.x &&
      a.x < basket.x + basket.width
    ) {
      apples.splice(i, 1);
      score++;
    } else if (a.y > height + 40) {
      apples.splice(i, 1); // 没接住也删除
    }
  }

  // 画篮子
  fill(200, 100, 50);
  rect(basket.x, basket.y, basket.width, basket.height, 10);

  // 画分数
  fill(255);
  textSize(32);
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
}

function mouseMoved() {
  basket.x = constrain(mouseX - basket.width / 2, 0, width - basket.width);
}
