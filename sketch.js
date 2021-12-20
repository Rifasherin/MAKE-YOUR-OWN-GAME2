var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon3.png","assets/balloon2.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("UP_ARROW")) {
            balloon.velocityY= -4 ;
            
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.velocityX= -4 ;
          }

          if(keyDown("RIGHT_ARROW")) {
            balloon.velocityX= +4 ;
          }

          if(keyDown("DOWN_ARROW")) {
            balloon.velocityY= +4 ;
          }
          //adding gravity
           balloon.velocityY = balloon.velocityY+0.01;
   
        drawSprites();
        
}