var bath,bathImg;
var brush,brushImg;
var eat,eatImg;
var drink,drinkImg;
var gym,gymImg,gym1,gym1Img;
var sleep,sleepImg;
var move,moveImg;
var background,backgroundImg;
var austronaut;


function preload(){

  backgroundImg = loadImage("IMAGES/iss.png");
  moveImg = loadAnimation("IMAGES/move.png","IMAGES/move1.png");
  sleepImg = loadImage("IMAGES/sleep.png");
  gymImg = loadAnimation("IMAGES/gym1.png","IMAGES/gym2.png","IMAGES/gym11.png","IMAGES/gym12.png");
  drinkImg = loadAnimation("IMAGES/drink1.png","IMAGES/drink2.png");
  eatImg = loadAnimation("IMAGES/eat1.png","IMAGES/eat2.png");
  brushImg = loadAnimation("IMAGES/brush.png");
  bathImg = loadAnimation("IMAGES/bath1.png","IMAGES/bath2.png");
}

function setup() {
  createCanvas(800,400);
  
background = createSprite(800,400);
background.addImage(backgroundImg);

austronaut = createSprite(300,230);
austronaut.addAnimation("sleeping",sleep);
austronaut.scale = 0.1;


}

function draw() {
  background(255,255,255);  

if(keyDown("UP_ARROW")){
austronaut.changeAnimation("brushing");
austronaut.y = 350;
austronaut.valocityX = 0;
austronaut.valocityy = 0;
}

if(keyDown("DOWN_ARROW")){
  austronaut.changeAnimation("gyming");
  austronaut.y = 350;
  austronaut.valocityX = 0;
  austronaut.valocityy = 0;
}

  if(keyDown("LEFT_ARROW")){
    austronaut.changeAnimation("brushing");
    austronaut.y = 350;
    austronaut.valocityX = 0;
    austronaut.valocityy = 0;
  }

    if(keyDown("RIGHT_ARROW")){
      austronaut.changeAnimation("bathing");
      austronaut.y = 350;
      austronaut.valocityX = 0;
      austronaut.valocityy = 0;
    }

      if(keyDown("m")){
        austronaut.changeAnimation("moving");
        austronaut.y = 350;
        austronaut.valocityX = 5;
        austronaut.valocityy = -5;
      }
      



  drawSprites();

  textSize(20);
  fill(255);
  text("INSTRUCTIONS:");
  textSize(20);
  fill(255);
  text(" Up_Arrow = brushing");
  textSize(20);
  fill(255);
  text(" Down_Arrow = gymming");
  textSize(20);
  fill(255);
  text("Left_Arrow = eating");
  textSize(20);
  fill(255);
  text(" Right_Arrow = bathing");
  textSize(20);
  fill(255);
  text("m key = moving");
}