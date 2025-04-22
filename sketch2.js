let wateringCan;
let angle = 0;
let particles = [];
let extraSpray = 0;
let canSize = 200;

function preload() {
  wateringCan = loadImage('water.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0); // 不保留轨迹，每帧清屏

  // 摇晃角度（左右摆动）
  angle = sin(frameCount * 0.05) * PI / 12;

  // 壶的位置：画布中间偏下
  let x = width / 2;
  let y = height 100;

  // 画壶
  push();
  translate(x, y);
  rotate(angle);
  image(wateringCan, 0, 0, canSize, canSize);
  pop();

  // 壶嘴坐标（根据壶图微调，假设壶嘴朝右）
  let spoutOffset = canSize * 0.3;
  let spoutX = x + spoutOffset * cos(angle);
  let spoutY = y + spoutOffset * sin(angle);

  // 洒水逻辑
  let sprayRate = extraSpray > 0 ? 3 : 10;

  if (frameCount % sprayRate === 0) {
    for (let i = 0; i < (extraSpray > 0 ? 5 : 1); i++) {
      particles.push({
        x: spoutX,
        y: spoutY,
        vx: random(-1, 1),
        vy: random(1, 3),
        alpha: 255
      });
    }
  }

  // 更新水滴
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 3;

    noStroke();
    fill(150, 200, 255, p.alpha);
    ellipse(p.x, p.y, 5);

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  // 减少喷发时间
  if (extraSpray > 0) {
    extraSpray--;
  }
}

function mousePressed() {
  extraSpray = 30; // 点击后喷更多水30帧
}
