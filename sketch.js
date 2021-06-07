

var elephant, elephant_running, elephant_collided;



var obstacleImg;
var backgroundImg, background;
var jumpSound, collidedSound;
var heart1, heart2, heart3;

function preload(){
  
  backImg = loadImage("assets/Forest_bg.jpg")
  
  elephant_running = loadAnimation("assets/Elephant_1.png","assets/Elephant_2.png","assets/Elephant_3.png");
  elephant_collided = loadAnimation("assets/Elephant_4.png");
  
  obstacleImg = loadImage("assets/Obstacle.png");
  
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImg);
  backgr.scale=3;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  elephant = createSprite(100,380,20,50);
  
  
  elephant.addAnimation("running", elephant_running);
  elephant.addAnimation("collided", elephant_collided);
  elephant.setCollider('circle',0,0,340)
  //elephant.scale = 0.08
  // elephant.debug=true
  // background=createSprite(200,200,windowWidth,windowHeight);
  // background.addImage(backgroundImg);
  // background.scale=2.5;
  // invisibleGround.visible =false
  heart1 = createSprite(0,170,20,20)
  heart1.visible = false
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.4

   heart2 = createSprite(displayWidth-100,40,20,20)
   heart2.visible = false
   heart2.addImage("heart2",heart2Img)
   heart2.scale = 0.4

   heart3 = createSprite(displayWidth-500,40,20,20)
   heart3.addImage("heart3",heart3Img)
   heart3.scale = 0.4
}

function draw() {
  //elephant.debug = true;
  background(255);
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  obstacles();
  drawSprites();
}

function obstacles(){
  if(frameCount% 120===0){
    obstacle=createSprite(600, 420, 20, 30);
    obstacle.setCollider('circle',0,0,45);

    obstacle.velocityX= -6;

    obstacle.addImage(obstacleImg);
    obstacle.scale=0.5;
  }
}
