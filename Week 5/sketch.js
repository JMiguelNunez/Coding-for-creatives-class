var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;
var cnv;
var d;
var g;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.mousePressed(changeGray); // attach listener for
                                // canvas click only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}

// this function fires with any click anywhere
function mousePressed() {
  d = d + 10;
}

// this function fires only when cnv is clicked
function changeGray() {
  g = random(0, 255);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

  //distance from center of the screen
  var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

    fill (random(200, 250), random(200, 250), random(200, 250));
    ellipse (x, y, d, d);

    //bouncing horizontally
   x = x + xspeed;
    
     if (x > windowWidth || x < 0)  {
      xspeed = -xspeed;
    }

    //bouncing veritcally
    y = y + yspeed;

    if (y > windowHeight || y < 0) {
      yspeed = -yspeed;
    }

}
