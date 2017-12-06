var paddle1, paddle2;



// p5 will look for a function named setup

// setup is just run once
function setup() {
  createCanvas(600, 400);
  paddle1 = height / 2 - 50; //This holds coordinates. Subtracting the height from half of the paddle so that the paddles start in the middle
  paddle2 = height / 2 - 50;
}

// This is run 60 times per second, as fast as it can go
function draw() {
  background(51);

  //This creates the actual paddle shape, x axis not needed for up and down motion
  rect(20, paddle1, 10, 100);
  rect(width - 20, paddle2, 10, 100);

  //Need to constrain the paddles
  paddle1 = constrain(paddle1, 0, height - 100);
  paddle2 = constrain(paddle2, 0, height - 100);
}
