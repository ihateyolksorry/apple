function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    cnv.style('pointer-events', 'none');
    cnv.style('z-index', '10');
  }
  
  function draw() {
    clear();
    let spacing = width / 6; 
    let rows = 2; 
    let cols = 8; 
  
    for (let r = 0; r < rows; r++) {
      for (let i = 0; i < cols; i++) {
        let x = spacing * (i + 1);
        let y = height - r * 180; 
        let sway = sin(frameCount * 0.05 + i * 0.5 + r * 0.3) * 10;
  
        push();
        translate(x, y);
        stroke(34, 139, 34);
        strokeWeight(8);
        line(0, 0, sway, -150);
        pop();
      }
    }
  }
  
  