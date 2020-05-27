var raindrops = [];

function setup(){
  createCanvas(640,360);

  for (i = 0; i < 500 ; i++){
    raindrops[i] = new raindrop();
  }
}

function draw(){
  background (230,230,250);

  for (i = 0 ; i < raindrops.length ; i++){
    raindrops[i].fall();
    raindrops[i].show();
  }
}