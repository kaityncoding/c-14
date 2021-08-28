var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var gamestate = "play"
var cloud, cloudsGroup, cloudImage;
var cacti, cacti2, cacti3, cacti4, cacti5, cacti6



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 cacti = loadImage("obstacle1.png")
 cacti2 = loadImage("obstacle2.png")
 cacti3 = loadImage("obstacle3.png")
 cacti4 = loadImage("obstacle4.png")
 cacti5 = loadImage("obstacle5.png")
 cacti6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  if(gamestate==="play"){

    ground.velocityX = -4;
  }
  else  if(gamestate==="end"){

    ground.velocityX = 0;
  }
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCacti();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnCacti(){
  if (frameCount % 60 === 0){
cactus = createSprite(600,160,100,100)

cactus.scale=0.6
cactus.velocityX = -3
cactus.lifetime = 200
var n = Math.round(random(1,6))
console.log(n);
switch(n){
case 1:cactus.addImage(cacti)
  break;
case 2:cactus.addImage(cacti2)
  break;  
case 3:cactus.addImage(cacti3)
  break;
case 4:cactus.addImage(cacti4)
  break;
case 5:cactus.addImage(cacti5)
  break;
  case 6:cactus.addImage(cacti6)
  break;
}
}
}