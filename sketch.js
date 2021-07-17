var Jake, path, JakeImg, pathImg, edges;
var leftBoundary, rightBoundary;

function preload(){
  //pre-load images
 JakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  edges = createEdgeSprites();
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  Jake = createSprite(200,340,200,40);
  Jake.addAnimation("Jake", JakeImg);
  Jake.scale = 1.2;
  
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  
  console.log(Jake.y);
  
  Jake.collide(leftBoundary);
  Jake.collide(rightBoundary);
  Jake.collide(edges[3]);
  
  Jake.x = World.mouseX
  
  // code to reset background
  if(path.y > 400){
    path.y = height/2
  }
  
  drawSprites();
}
