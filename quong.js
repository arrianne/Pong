// 4 player Pong!

var p1, p2, p3, p4;// Adding the 4 players
var p1V, p2V, p3V, p4V; //controlling the speed of the paddles
var p1S, p2S, p3S, p4S;

var ball1, ball1V; //controlling the speed of the ball

// p5 will look for a function named setup

// setup is just run once
function setup() {

  createCanvas(600, 600); //Making the canvas a square
  p1 = p2 = height / 2 - 50; //This holds coordinates. Subtracting the height from half of the paddle so that the paddles start in the middle
  p1V = p2V = 0;
  p1S = 0;
  p2S = 0;

  p3 = p4 = width / 2 - 50;
  p3V = p4V = 0;
  p3S = 0;
  p4S = 0;

  //Drawing the title

  //Drawing the scoreboard
  textAlign(CENTER);
  textSize(30);
  fill(255);

  //Drawing the ball
  ball1 = createVector(width / 2, height / 2);
  ball1V = createVector(random(-1, 1), random(-1, 1));
  ball1V.setMag(3); //setMag is a p5 thing which helps set the magnitude
}


// This is run 60 times per second, as fast as it can go
function draw() {

  background(0);

  //This creates the actual paddle shape, x axis not needed for up and down motion
  rect(20, p1, 10, 100);
  fill(66, 244, 232);

  rect(width - 30, p2, 10, 100);
  fill(230, 195, 244);

  rect(p3, 20, 100, 10);
  fill(244, 233, 195);

  rect(p4, 565, 100, 10);
  fill(195, 224, 244);

  //creating the ball1
  ellipse(ball1.x, ball1.y, 20);
  fill(255, 255, 255)
  //handlling the scoreboard
  text(p1S + " | " + p2S, width / 2, 100);
  //handle paddles
  handlePaddles();
  //handling the ball
  handleBall();

}



function handleBall() {

  //controlling the velocity of the ball
  ball1.x += ball1V.x;
  ball1.y += ball1V.y;
  //we need the ball to acknowledge the edges of the canvas

//Collisions with the top and bottom
//so if the balls y axis is greater than the height of the canvas or smaller than zero then it will bounce off the edges.
  if (ball1.y > height || ball1.y < 0)
  ball1V.y *= -1; //This inverts it and goes in rickashay pattern.
  //paddle collisions - the tricky part!
  if (ball1.x <= 30) { //right side
  //out of bounds
  if (ball1.x <= 10){
  p2S++;
  reset();
  return;
}
  //right paddle
  //check if the x position actually falls on the length of the paddle
  if (ball1.y > p1 && ball1.y < p1 + 100){
      ball1V.x *= -1;
      ball1V.mult(random(1, 1.1));// Increases the speed as it hits the paddle
    }

  } else if (ball1.x >= width - 30) {
  //out of bounds
  if ( ball1.x >= width - 10 ){
    p1S++; //
    reset();
    return;
  }

 //left paddle
  if (ball1.y > p2 && ball1.y < p2 + 100) {
      ball1V.x *= -1;
      ball1V.mult(random(1, 1.1));// Increases the speed as it hits the paddle
    }
  }

  function reset() {

    ball1V.setMag(3);
    ball1 = createVector(width / 2, height /2);

  }
}


//p5 allows you to check if a key is down or not and controls the movement
function handlePaddles() {

  //player one controls
  if(keyIsDown(87)){
    //move up
    p1V -= 5;
  } else if(keyIsDown(83)) {
    //move down
    p1V += 5;
  }

  //player two controls
  if(keyIsDown(UP_ARROW)){
    //move up
    p2V -= 5;
  } else if(keyIsDown(DOWN_ARROW)) {
    //move down
    p2V += 5;
  }

  //player three controls
  if(keyIsDown(84)){
    //left
    p3V -= 5;
  } else if(keyIsDown(89)) {
    //right
    p3V += 5;
  }

  //player four controls
  if(keyIsDown(66)){
    //move left
    p4V -= 5;
  } else if(keyIsDown(78)) {
    //move right
    p4V += 5;
  }

  //Slows the paddles down and gives the illusion of friction
  p1 += p1V;
  p2 += p2V;
  p3 += p3V;
  p4 += p4V;

  p1V *= 0.4;
  p2V *= 0.4;
  p3V *= 0.4;
  p4V *= 0.4;

  //Need to constrain the paddles
  p1 = constrain(p1, 0, height - 100);
  p2 = constrain(p2, 0, height - 100);
  // p3 = constrain(p3, 0, height - 100);
  // p4 = constrain(p4, 0, height - 100);

}
