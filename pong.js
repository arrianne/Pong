var p1, p2;
var p1V, p2V; //controlling the speed of the paddles


// p5 will look for a function named setup

// setup is just run once
function setup() {
  createCanvas(600, 400);
  p1 = height / 2 - 50; //This holds coordinates. Subtracting the height from half of the paddle so that the paddles start in the middle
  p2 = height / 2 - 50;
}

// This is run 60 times per second, as fast as it can go
function draw() {
  background(51);

  //This creates the actual paddle shape, x axis not needed for up and down motion
  rect(20, p1, 10, 100);
  rect(width - 20, p2, 10, 100);

  //Need to constrain the paddles
  p1 = constrain(p1, 0, height - 100);
  p2 = constrain(p2, 0, height - 100);


//handle inputs
handleMovement();

}


//p5 allows you to check if a key is down or not and controls the movement
function handleMovement() {

  //player one controls
  if(keyIsDown(87)){
    //move up
    p1V =+ 5;
  } else if(keyIsDown(83)) {
    //move down
    p1V =- 5;
  }

  //player two controls
  if(keyIsDown(UP_ARROW)){
    //move up
    p2V =+ 5;
  } else if(keyIsDown(DOWN_ARROW)) {
    //move down
    p2V =- 5;
  }


}
