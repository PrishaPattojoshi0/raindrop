var raindrop ;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0,0,0);  
  
  for (var i = 50; i < 750; i + 10){
    raindrop = createSprite(i,30,20,15);
  }
  
  raindrop.display();
}