let ball0;
let ball1;

let x0, y0;
let dy0 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = {
    x = random(width),
    y = random(50)
  }

  x0 = random(width)
  y0 = 0
}

function draw() {
  background(200);

  y0 += dy0
  dy0 += .25
  circle(x0, y0, 100)

  if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }
  if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }if(ball0 >= height - 50) {
    console.info('bounce')
    y0 -= dy0
    dy0 = 0.9 * -dy0
  }


}


