var p1, p2;
var p1V, p2V; //controlling the speed of the paddles

var ball1, ball1V; //controlling the speed of the ball

// p5 will look for a function named setup

// setup is just run once
function setup() {
  createCanvas(600, 400);
  p1 = p2 = height / 2 - 50; //This holds coordinates. Subtracting the height from half of the paddle so that the paddles start in the middle
  p1V = p2V = 0;

  //Drawing the ball
  ball1 = createVector(width / 2, height / 2);
  ball1V = createVector(random(-2, 2), random(-2, 2));
}

// This is run 60 times per second, as fast as it can go
function draw() {
  background(51);

  //This creates the actual paddle shape, x axis not needed for up and down motion
  rect(20, p1, 10, 100);
  rect(width - 20, p2, 10, 100);

  //creating the ball1
  ellipse(ball1.x, ball1.y, 20);

  //handle paddles
  handlePaddles();
  //handling the ball
  handleBall();

}



function handleBall() {
//we need the ball to acknowledge the edges of the canvas

//Collisions with the top and bottom
//so if the balls y axis is greater than the height of the canvas or smaller than zero then it will bounce off the edges.
if (ball1.y > height || ball1.y < 0)
  ball1V.y *= -1; //This inverts it and goes in rickashay pattern.

//paddle collisions



//controlling the velocity of the ball
  ball1.x += ball1V.x;
  ball1.y += ball1V.y;


}


//p5 allows you to check if a key is down or not and controls the movement
function handlePaddles() {

  //player one controls
  if(keyIsDown(87)){
    console.log('Why is this bat not moving');

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


  //Slows the paddles down and gives the illusion of friction

  p1 += p1V;
  p2 += p2V;

  p1V *= 0.4;
  p2V *= 0.4;





  //Need to constrain the paddles
  p1 = constrain(p1, 0, height - 100);
  p2 = constrain(p2, 0, height - 100);

}
