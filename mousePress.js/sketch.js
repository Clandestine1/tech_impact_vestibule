// driver: Naomi writer: Yamil
var circleX = 500;
var circleW = 25;
var circleH = 25;

var ovalY = 10;
var ovalK = 10;


function setup() {
  createCanvas(1000, 1000);
}

function mousePressed() {
    outerCircle();
    innerCircle();
    var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    var colorChange = random(colors);
    
    fill(colorChange);
    
}

function outerCircle() {
  noStroke();
  
  for(var i = 0; i < 10; i++){
    circleW += i;
    circleH += i;
  }
  
  ellipse(circleX, 500, circleW, circleH);
  
}

function innerCircle() {
    stroke("black");
    strokeWeight(5);
    
    for(var i = 0; i < 10; i++) {
        ovalY += 0.5;
        ovalK += 0.5;
    }
    ellipse(500, 500, ovalY, ovalK);
    
  
}

// function draw() {
//     if (mouseIsPressed)
//         background(colorChange);
//   