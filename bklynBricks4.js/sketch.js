var brickA = [];
var xtrasA = [];

function setup() {
  createCanvas(500, 500);
  background('#DDFFF7') //light blue

  for (var i = 0; i < 4; i++) {
    brickA[i] = new Bricks();
  }

  for (var j = 0; j < 5; j++) {
    xtrasA[j] = new Xtras();
  }

}

function draw() {

  for (var i = 0; i < brickA.length; i++) {
    brickA[i].brickLoop();
  }

  for (var j = 0; j < xtrasA.length; j++) {
    xtrasA[j].makeDoors();
    xtrasA[j].makeStairs();
  }

}


function Bricks() {
  this.brk = {
    x: 150,
    y: 100,
    w: 25,
    h: 10
  }

  this.brickLoop = function() { //will add more to manipulate with mouse here
    for (var i = 0; i < width; i += 25) {
      for (var j = 0; j < height; j += 10) {
        stroke('white');
        strokeWeight(0.25);

        if (i <= width/3 && j <= height - 100) { //left bldg
          fill('#684240'); //dark coffee 684240
          rect(i, j + 100, this.brk.w, this.brk.h);
        } else if (i <= width/1.5 && j <= height) { //middle bldg
          fill('#773E3B') //dark coral 773E3B
          rect(i, j + 150, this.brk.w, this.brk.h);
        } else if (i <= width && j <= height - 175) { //right bldg
          fill('#774C4A'); //other cool color = #772B2B // 774C4A
          rect(i, j + 175, this.brk.w, this.brk.h);
        }
      }
    }
  }
}

function Xtras() {
  this.xtra = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 50,
    f: 150,
    g: 380
  }
  
  this.makeDoors = function() {
  //door
  noStroke();
  fill('red');
  rect(70, 340, 50, 65); //left door
  fill('black');
  ellipse(80, 360, 6, 5); //left handle
  fill('white');
  rect(225, 330, 50, 72); //middle door
  fill('black');
  ellipse(250, 360, 7, 7); //middle handle
  fill('brown');
  rect(400, 340, 50, 60); //right door
  fill('white');
  ellipse(430, 365, 9, 7);
  }
  
  this.makeStairs = function() {
    //sidewalk
    fill('gray');
    rect(0, 400, 500, 100);
    //stair set up
    stroke('black');
    strokeWeight(3);
    //left stairs
    fill('brown');
    rect(this.xtra.e, this.xtra.d, this.xtra.a, this.xtra.b); //left stairs
    line(this.xtra.e, this.xtra.d + 30, this.xtra.f, this.xtra.d + 30);
    line(this.xtra.e, this.xtra.d + 70, this.xtra.f, this.xtra.d + 70);
    //right stairs
    fill('#683425');
    rect(this.xtra.g, this.xtra.d, this.xtra.a - 10, this.xtra.b); //right stairs
    line(this.xtra.g, this.xtra.d + 30, this.xtra.g + 90, this.xtra.d + 30);
    line(this.xtra.g, this.xtra.d + 70, this.xtra.g + 90, this.xtra.d + 70);
    //middle stairs
    fill('#683425'); //find different color later
    rect(this.xtra.b, this.xtra.d, this.xtra.a, this.xtra.b); //middle stairs
    line(this.xtra.b, this.xtra.d + 30, this.xtra.c, this.xtra.d + 30);
    line(this.xtra.b, this.xtra.d + 70, this.xtra.c, this.xtra.d + 70);
  }
}
//  this.xtra = {
//     a: 100,
//     b: 200,
//     c: 300,
//     d: 400,
//     e: 50
//    f: 150
//   }


