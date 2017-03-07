var brick1=true;
var brick2=true;
var brick3=true;
var brick4=true;
var brick5=true;
var brick6=true;
var brick7=true;
var brick8=true;
var brick9=true;
var brick10=true;
var brick11=true;
var brick12=true; 
var paddleWidth = 100;
var paddleX;
var paddleY;
var distance;

// the speed of the ball when it first leaves the paddle
var initialSpeedX = 5;
var initialSpeedY = -10;

// the current speed of the ball
var ballSpeedX = initialSpeedX;
var ballSpeedY = initialSpeedY;

// the current location of the ball
var ballX = 0 ;
var ballY = 0;

var img;

var lives = 3;

// true if ball is moving, false if ball is attached to paddle
var ballMoving = false;
function preload(){
    img=loadImage('Media/heart.png')
}
function setup() {
  createCanvas(600, windowHeight);
  paddleY = windowHeight-50;
  image(img, width/2, height/2, 50, 50);
}

var draw = function() {

    background(0);
    for (var i = 0; i < lives; i++) {
        image(img, 0 + i * 50, 0, 30, 30);
    }
    
   
    // draw the paddle
    fill(240, 126, 65);
    paddleX = mouseX - paddleWidth/2;
    rect(paddleX, paddleY, paddleWidth, 20);
    
    // move the ball
    if (ballMoving) {
        ballX += ballSpeedX;
        ballY += ballSpeedY;
    }
    else {
        ballX = mouseX;
        ballY = windowHeight-60;
    }
    
    // draw the ball
    fill(255, 234, 0);
    ellipse(ballX, ballY, 20, 20);
    
    // ball hits top
    if (ballY <= 50) {
        ballSpeedY = -ballSpeedY;
    }
    // ball hits left
    if (ballX <= 10) {
        ballSpeedX = -ballSpeedX;
    }
    // ball hits right
    if (ballX >= 600) {
        ballSpeedX = -ballSpeedX;
    }
    // ball hits paddel
    if (ballY >= windowHeight-50 && ballX >= mouseX - paddleWidth/2 && ballX <= mouseX + paddleWidth/2) {
        ballSpeedY = -ballSpeedY;
    }
    //ball respawn
    if (ballY >= windowHeight-10) {
        ballMoving = false;
        lives=i-1;
    }
    if (ballY>=windowHeight-10 && lives=0){
        textSize(100);
        text("GAME OVER!", windowWidth/2, windowHeight/2)
    }
    //ball hits the brick 
    if(brick1===true){
        if(ballY< 69){
            if(ballX >= 0 && ballX<= 100){
                brick1=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick1===true){
            fill(0,255,0);
            rect(0,30,100, 40);
        }
    }
 if(brick2===true){
        if(ballY< 69){
            if(ballX>= 100 && ballX<= 200){
                brick2=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick2===true){
            fill(0,255,0);
            rect(100,30,100, 40);
        }
    }
    if(brick3===true){
        if(ballY< 69){
            if(ballX >= 200 && ballX <= 300){
                brick3=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick3===true){
            fill(0,255,0);
            rect(200,30,100, 40);
        }
    }
    if(brick4===true){
        if(ballY< 69){
            if(ballX >= 300 && ballX <= 400){
                brick4=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick4===true){
            fill(0,255,0);
            rect(300,30,100, 40);
        }
    }
    if(brick5===true){
        if(ballY< 69){
            if(ballX >= 400 && ballX <= 500){
                brick5=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick5===true){
            fill(0,255,0);
            rect(400,30,100, 40);
        }
    }
    if(brick6===true){
        if(ballY< 69){
            if(ballX >= 500 && ballX <= 600){
                brick6=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick6===true){
            fill(0,255,0);
            rect(500,30,100, 40);
        }
    }
    if(brick7===true){
        if(ballY< 109){
            if(ballX >= 0 && ballX <= 100){
                brick7=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick7===true){
            fill(0,0,255);
            rect(0,70,100, 40);
        }
    }
    if(brick8===true){
        if(ballY< 109){
            if(ballX >= 100 && ballX <= 200){
                brick8=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick8===true){
            fill(0,0,255);
            rect(100,70,100, 40);
        }
    }
    if(brick9===true){
        if(ballY< 109){
            if(ballX >= 200 && ballX <= 300){
                brick9=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick9===true){
            fill(0,0,255);
            rect(200,70,100, 40);
        }
    }
    if(brick10===true){
        if(ballY< 109){
            if(ballX >= 300 && ballX <= 400){
                brick10=false;
                ballSpeedY *= -1;
            }
        } 
        if(brick10===true){
            fill(0,0,255);
            rect(300,70,100, 40);
        }
    }

}

var mouseClicked = function() {
    if (!ballMoving) {
        // reset the ball speed
        ballSpeedX = initialSpeedX;
        ballSpeedY = initialSpeedY;
        
        ballMoving = true;
    }
};
