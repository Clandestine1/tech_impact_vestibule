var bouncer = 250;
var petalMoves = [];
var buzz = [];
var speed = 2;
var seedPress = [];
var makeRain = [];
var rotation = [];

function setup() {
  createCanvas(500, 500); //Create square canvas to start with
  for (var i = 0; i < 1; i++) {
    petalMoves[i] = new Petal(); //set Petal function to iterate through petalMoves array once
  }
  for (var j = 0; j < 1; j++) {
    buzz[i] = new BumbleBee(); //set BumbleBee function to iterate through buzz array once
  }
  for (var k = 0; k < 2; k++) {
    rotation[k] = new RotateFlower(0, 0, 50, 80, 20);
  }
}

function draw() {
  background('#BBDEF0'); //draws the background

  //moves petals around from -1 through 1
  for (var i = 0; i < petalMoves.length; i++) { //iterates through petal moves array at index of i
    //petalMoves[i].move(); //calls .move function at correct index
    petalMoves[i].display(); //calls .display function at correct index
  }

  for (var q = 0; q < rotation.length; q++) {
    push();
    translate(width*0.5, height*0.5); //need to change later to adjust location on canvas
    rotate(frameCount / 100.0);
    rotation[q].star(0, 0, 50, 80, 20);
    pop();
  }


  //moves bee around from -1 through 1
  for (var j = 0; j < buzz.length; j++) {
      buzz[i].create();
      buzz[i].beeMoves();
  }

  //moves leaf from middle to bottom and back continuously
  if (bouncer <= 249 || bouncer >= 489) {
    speed *= -1;
  }
  bouncer = bouncer + speed;

  //creates new seed on mouse press
  for (var k = seedPress.length - 1; k >= 0; k--) {
    //stipulates placement of mouse for seeds
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
      seedPress[k].update();
      seedPress[k].display();
    }
  }

  //makes moving ellipse on mouse dragged
  for (var g = 0; g < makeRain.length; g++) {
    makeRain[g].move();
    makeRain[g].display();

    if (makeRain.length > 50) {
      makeRain.splice(0, 1);
    }
  }
}

function mousePressed() {
  var s = new Seeds(mouseX, mouseY);

  seedPress.push(s);
}

function mouseDragged() {
  makeRain.push(new Rain(mouseX, mouseY));
}

function Petal() {
  //sets moving variables
  this.a = 300;
  this.b = 200;
  this.c = 250;
  this.d = 100;
  this.e = 110;
  //draws 4 outside petals, stem, and leaf
  this.display = function() {
    //ground
    noStroke();
    fill('#D4B483');
    rect(0, 450, 500, 50);
    //stem
    noStroke();
    fill('#A8d4ad');
    rect(240, 300, 20, 150);
    //leafs
    fill('#CAE2BC');
    ellipse(220, 400, 50, 30); //leaf1
    ellipse(280, 380, 50, 30); //leaf2
    //middle overlapping petals
    fill(255, random(5), random(200));
    frameRate(20);
    ellipse(this.c, this.c, this.b, this.d);
    ellipse(this.c, this.c, this.d, this.b);
    // //sets petal parameters
    // fill('#F3A712');
    // strokeWeight(2);
    // stroke('#FABC3C');
    // //creates petals
    // ellipse(this.b, this.b, this.d, this.d); //left-top circle
    // ellipse(this.a, this.b, this.d, this.d); //right-top circle
    // ellipse(this.b, this.a, this.d, this.d); //left-bottom circle
    // ellipse(this.a, this.a, this.d, this.d); //right-bottom circle
    //sets middle circle parameters
    stroke('#FF5f3F');
    fill('#F55536');
    //creates middle circle
    ellipse(this.c, this.c, this.e, this.d); //middle circle
    //creates bouncing leaf
    //ellipse(bouncer - 50, bouncer, 50, 20); //leaf
  }
  //moves the x and y coordinates (in petals) to move randomly from -1 to 1
  // this.move = function() {
  //   this.a = this.a + random(-1, 1);
  //   this.b = this.b + random(-1, 1);
  // }
}

//creates moving bumble bee
function BumbleBee() {
  //sets moving parameters
  this.beeX = 0;
  this.beeY = 90;
  this.beeSpeed = 2;

  this.create = function() {
    //sets bee parameters
    noStroke();
    fill('white');
    ellipse(this.beeX, this.beeY, 20, 60); //bee wing
    fill('yellow');
    ellipse(this.beeX, this.beeY, 50, 30); //bee body
    stroke('black');
    strokeWeight(15);
    line(this.beeX, this.beeY - 8, this.beeX, this.beeY + 8); //bee stripe
  }

  //makes bee move on mouse hover
  this.beeMoves = function() {
    if (mouseX >= this.beeX && mouseY >= this.beeY) {
      this.beeX += random(-2, 2);
      this.beeY += random(-5, 5);
    } else if (this.beeX > width || this.beeX < 0) {
      this.beeSpeed = -this.beeSpeed;
    }
    this.beeX = this.beeX + this.beeSpeed;
  }
}

function Seeds(x, y) {
  this.x = x;
  this.y = y;
  this.z = 7;

  this.display = function() {
    //sets seed parameters
    noStroke();
    fill('brown');
    //draws seed
    ellipse(this.x, this.y, this.z, this.z); //seed
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.z = 12;

  this.display = function() {
    stroke('blue');
    strokeWeight(1);
    fill('blue');
    ellipse(this.x, this.y, this.z, this.z);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function RotateFlower(x, y, radius1, radius2, npoints) {
  this.x = 250;
  this.y = 100;
  this.z = 200;
  this.w = 300;

  this.angle = TWO_PI / npoints;
  this.halfAngle = this.angle/2.0;

  this.display = function() {
    fill('#ff8c42');
    strokeWeight(1);
    //draws 4 main petals to rotate
    ellipse(this.z, this.z, this.y, this.y);
    ellipse(this.w, this.z, this.y, this.y);
    ellipse(this.z, this.w, this.y, this.y);
    ellipse(this.w, this.w, this.y, this.y);
  }

  this.star = function(x, y, radius1, radius2, npoints) { //need to change later! back to the petals
    noStroke();
    fill('#ff8c42');

    beginShape();
    for (var i = 0; i < TWO_PI; i += this.angle) {
      var sx = x + cos(i) * radius2;
      var sy = y + sin(i) * radius2;

      vertex(sx, sy);
      sx = x + cos(i+this.halfAngle) * radius1;
      sy = y + sin(i+this.halfAngle) * radius1;

      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}




