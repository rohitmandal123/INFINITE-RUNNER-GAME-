let player;
let blobs = [];
let score = 0;
let minScore = 0;
let bg;




function preload(){
  bg = loadImage("back0.png");

}
function setup() {
  createCanvas(600, 500);
  player = new Player();
  
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {

  background(bg);
  

 

  


  score += .05;
  fill(0);

  textSize(30);
  text(round(score), 10, 32);

  player.show();
  player.move();

  if (random(1) < 0.03) {
    if (score > minScore) {
      blobs.push(new Blob());
      minScore = score + 2 + random(1);
    }
  }

  for (blob of blobs) {
    blob.setSpeed(8 + sqrt(score) / 5);
    blob.move();
    blob.show();

    if (player.hits(blob)) {
    background(0);
    
      text("GAME OVER",190,100,
          fill(255))
      print("GAME OVER");
      noLoop();
    }

    if (blob.getX() < -50) {
      blobs.shift();
      print("Removed");
    }
  }

}