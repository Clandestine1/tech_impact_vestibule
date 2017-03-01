var brickA = [];

function preload() {
  //song = loadSound("birdChirp.mp3");
}

function setup() {
  createCanvas(500, 500);
  background('#DDFFF7') //light blue
  
  for (var i = 0; i < 2; i++) {
    brickA[i] = new Bricks();
  }
}

function draw() {
  noStroke()
  fill('white');
  rect(150, 100, 200, 300);
  
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
  
  // if (mouseX >= 150 && mouseX <= 350 && mouseY >= 100 && mouseY <= 400) {
  //   song.play();  
  // }
  
  
}

function Bricks() {
  this.x = 150;
  this.y = 100;
  this.w = 25;
  this.h = 10;

  this.brickLoop = function() { //will add more to manipulate with mouse here
    for (var i = 0; i < 200; i += 25) {
      for (var j = 0; j < 300; j += 10) {
        stroke('white');
        strokeWeight(0.25);
        if (i % 3 === 0 || j % 3 === 0) {
          fill('#684240'); //dark coffee 684240
          rect(this.x + i, this.y + j + 1, this.w, this.h);
        } else if (i % 2 === 0 || j % 7 === 0) {
          fill ('#773E3B') //dark coral C16441
          rect(this.x + i + 1, this.y + j, this.w, this.h);
        } else if (j % 5 === 0) {
          fill ('#774C4A');
          rect(this.x + i, this.y + j, this.w, this.h);
        } else if (i % 5 === 0) {
          fill ('#772B2B');
          rect(this.x + i + 2, this.y + j, this.w, this.h)
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
