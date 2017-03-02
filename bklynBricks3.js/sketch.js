

var brickA = [];
var bldgA = [];

function setup() {
  createCanvas(500, 500);
  background('#DDFFF7') //light blue

  for (var i = 0; i < 4; i++) {
    brickA[i] = new Bricks();
  }

  for (var j = 0; j < 4; j++) {
    bldgA[j] = new Bldg();
  }
}

function draw() {

  for (var j = 0; j < bldgA.length; j++) {
    //bldgA[j].buildBldg();
  }

  for (var i = 0; i < brickA.length; i++) {
    brickA[i].brickLoop();
  }

  //door
  fill('red');
  rect(225, 330, 50, 72);
  //door handle
  noStroke();
  fill('black');
  ellipse(250, 360, 7, 7);
  //stairs
  stroke('black');
  strokeWeight(3);
  fill('#683425');
  rect(200, 400, 100, 200);
  line(200, 430, 300, 430);
  line(200, 470, 300, 470);
}

function Bldg() {
  this.buildBldg = function() {
  //middle bldg 1
  noStroke()
  fill('green');
  // rect(bldg.x, bldg.y, bldg.w, bldg.h); //middle bldg1
  // rect(bldg.x - bldg.x, bldg.y - bldg.e, bldg.w - (bldg.e * 2), bldg.h + bldg.e); //left bldg2
  // rect(bldg.x + bldg.w, bldg.e * 2, bldg.w, bldg.h + bldg.e * 2); //right bldg3
  rect(bldg.l);
  rect(bldg.m);
  rect(bldg.r);
  }
}

function Bricks() {
  this.brk = {
    x: 150,
    y: 100,
    w: 25,
    h: 10
  }
  
  // var bldg = {
  //   l: (0, 75, 150, 325),
  //   m: (150, 100, 200, 300),
  //   r: (350, 50, 200, 350)  
  // }

  this.brickLoop = function() { //will add more to manipulate with mouse here
    for (var i = 0; i < width; i += 25) {
      for (var j = 0; j < height; j += 10) {
        stroke('white');
        strokeWeight(0.25);
        
        if (i <= width/3 && j <= height - 100) { //left bldg
          fill('#684240'); //dark coffee 684240
          rect(0 + i, 100 + j, this.brk.w, this.brk.h);
        } else if (i > 167 && i < 333 && j <= height - 150) { //middle bldg
          fill('#773E3B') //dark coral C16441
          rect(167 + i, 150 + j, this.brk.w, this.brk.h);
        } else if (i <= width || j <= height - 175) { //right bldg
          fill('#774C4A'); //other cool color = #772B2B
          rect(333 + i, 175 + j, this.brk.w, this.brk.h);
        } 
      }
    }
  }
}

function Windows() { //will do something cool here
  this.x = 10;
  this.y = 20;
  this.w = 30;
  this.h = 40;

  this.makeWindows = function() {
    rect();
  }
}