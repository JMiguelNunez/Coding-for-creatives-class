var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;
var cnv;
var d;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.mousePressed(changeGray); 
  d = 10;
  
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}

function mousePressed() {
  d = d + 10;
}
function mouseReleased(){
  d=d-10;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (random(1,255), mouseX, mouseY);

}

function draw() {

  //distance from center of the screen
  //var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

    fill (mouseX, mouseY, random(1, 255));
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
