var flwr = {
  y: 100,
  z: 200,
  x: 250,
  q: 225
}
var bouncer = 300;
var speed = 2;
var petalMoves = [];
var buzz = 

//Create square canvas to start with
//iterate through petalMoves array once
function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 1; i++) {
    petalMoves[i] = new Petal();
  }
}

function draw() {
  background('#694F5D') //draws the background
  //moves petals around from -1 through 1
  for (var i = 0; i < petalMoves.length; i++) { //iterates through petal moves array at index of i
    petalMoves[i].move(); //calls .move function at correct index
    petalMoves[i].display(); //calls .display function at correct index
  }

  //moves circle from middle to bottom and back  continuously 
  if ( bouncer >= 400 || bouncer <= 99) {
    speed *= -1;
  }
  bouncer = bouncer + speed
  
  //moves bee from left to right
  
}

function Petal() {
  this.moveOne = 300;
  this.moveTwo = 200;
  
  this.display = function() {
    //sets petal parameters
    fill('#68A691');
    stroke('#AD91A3'); 
    //creates petals
    ellipse(flwr.z, flwr.z, flwr.y, flwr.y); //left-top circle
    ellipse(this.moveOne, this.moveTwo, flwr.y, flwr.y); //right-top circle
    ellipse(this.moveTwo, this.moveOne, flwr.y, flwr.y); //left-bottom circle
    ellipse(this.moveOne, this.moveOne, flwr.y, flwr.y); //right-bottom circle
    //sets middle circle parameters
    noStroke();
    fill('#FE938C');
    strokeWeight(3);
    //creates middle circle
    ellipse(flwr.x, flwr.x, flwr.y, flwr.y); //middle circle
    //sets stem parameters
    fill('#CAE2BC');
    //creates stem
    rect(245, 300, 10, 150); //stem
    //creates leaf
    ellipse(bouncer, bouncer - 50, 50, 20); //leaf
  }
  
  //moves the x and y coordinates anywhere it is placed to move randomly from -1 to 1
  this.move = function() {
    this.moveOne = this.moveOne + random(-1, 1);
    this.moveTwo = this.moveTwo + random(-1, 1);
  }
}

function BumbleBee() {
  this.create = function() {
    //sets bee parameters
    fill('yellow');
    stroke('black');
    strokeWeight(3);
    //draws bee
    ellipse(0, 20, 40, 10); //bigger bee oval
    ellipse(0, 20, 10, 30); //smaller bee oval
    // line(); //stripes
    // line(); //stripes
  }
}
