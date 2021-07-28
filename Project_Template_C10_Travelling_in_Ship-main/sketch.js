var seaImg, ship, edges;
var shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(600,600);
  
  sea = createSprite(300,150,600,300);
  sea.addImage("background", seaImg);
  sea.velocityX = -2


  ship = createSprite(300,300,30,60);
  ship.addAnimation("shipmoving", shipImg1);
  edges = createEdgeSprites(); 

  ship.scale = 0.3; 
 
}

function draw() {
  background("blue");
 
  //console.log(sea.x);

  
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();

}