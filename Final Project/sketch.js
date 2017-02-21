var ballSpeedX = 5;
var ballSpeedY = 3;
var ballR = 10;
var ballX = 200;
var ballY = 200;

var brick1=true;
var brick2=true;
var brick3=true;
var brick4=true;
var brick5=true;
var brick6=true;
var brick7=true;
var brick8=true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
var draw = function() {
    background(0);
    ellipse(ballX,ballY, 20, 20);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if(ballX+ballR > windowWidth-10 || ballX-ballR< 0){
        ballSpeedX *= -1;
    }
    
    if(ballY+ballR > windowHeight-10 || ballY-ballR < 0){
        ballSpeedY *= -1;
    }
    
    //check if hit a brick and drawing bricks
    if(brick1===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 0 && ballX-ballR <= 100){
                brick2=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick2===true){
            rect(0,0,100, 40);
        }
    }

    
    if(brick2===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 100 && ballX-ballR <= 200){
                brick2=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick2===true){
            rect(100,0,100, 40);
        }
    }

    if(brick3===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 200 && ballX-ballR <= 300){
                brick3=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick3===true){
            rect(200,0,100, 40);
        }
    }
    
    if(brick4===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 300 && ballX-ballR <= 400){
                brick4=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick4===true){
            rect(300,0,100, 40);
        }
    }
    if(brick5===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 400 && ballX-ballR <= 500){
                brick5=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick5===true){
            rect(400,0,100, 40);
        }
    }if(brick6===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 500 && ballX-ballR <= 600){
                brick6=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick6===true){
            rect(500,0,100, 40);
        }
    }if(brick7===true){
        if(ballY-ballR < 40){
            if(ballX+ballR >= 600 && ballX-ballR <= 700){
                brick7=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick7===true){
            rect(600,0,100, 40);
        }
    }if(brick8===true){
        if(ballY-ballR<40);{
            if(ballX+ballR>=0 && ballX-ballR<=100){
                brick8=false;
                ballSpeedY *= -1;
            }
        }
    }
        if(brick8==true){
            rect(0,40,100,40)
        }
    
    //draw paddle

    rect(mouseX-50, windowHeight-50, 100,20);
    fill(255,0,0);
    if(ballX+ballR > mouseX-100 && ballX-ballR < mouseX + 100 && ballY+ballR > 370){
        ballSpeedY *= -1;
    }
    
}