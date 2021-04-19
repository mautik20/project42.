var backImage,backgr;
var player, player_running;
var ground,ground_img;
var FoodGroup;
var score;
var obstacleGroup;
var gameend;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  fruit1_img=loadImage("banana.png");
  stone1_img=loadImage("stone.png");
  gameend_img=loadImage("gameOver.png");}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;

  gameend=createSprite(400,200,100,20);
  gameend.addImage(gameend_img);
  gameend.visible=false; 
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  score =0;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
  }
  spawnFood();
  spawnstone();
  drawSprites();
  
  /*  if (gameState===PLAY){}



if (obstacleGroup.isTouching(player)){
     gameState === END;}

   if(gameState === END){
  if(obstacleGroup.isTouching(player)){
      FoodGroup.destroyEach();
      FoodGroup.velocityX= 0;
      obstacleGroup.destroyEach();
      score = score = 0;
      backgr.velocityX = 0;        
      ground.velocityX = 0;        
      player.visible=false;



    //  FoodGroup.visible=false;
     // obstacleGroup.visible=false;
       //text("Game Over!" .visible=true);

      textSize(30);
      fill(255);
      text("Game Over!", 300,220);
     // text("Game Over!".lifetime = 200);
   }
  }*/

    
  

if(FoodGroup.isTouching(player)){
  FoodGroup.destroyEach();
  score = score + 2;
  player.scale += +0.1
  }

if(obstacleGroup.isTouching(player)){
 // player.scale = 0.05
  FoodGroup.destroyEach();
  obstacleGroup.destroyEach();
  score = score = 0;
  backgr.velocityX = 0;        
  ground.velocityX = 0;        
  player.visible=false;
  gameend.visible=true;

}



fill("white");
  text("score: "+ score, 100,50);
}


/*if(obstacleGroup.isTouching(player)){
   text("Game Over! "+ text, 400,200);
   text("Game Over!" .visible=false);
  }*/

function spawnFood(){
 //write code here to spawn food
if(frameCount % 100 === 0) { 
  var banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.addImage(fruit1_img);
  banana.scale = 0.05;
  banana.velocityX= -4;


  banana.lifetime = 300;
  player.depth = banana.depth + 1;
  FoodGroup.add(banana);
  }
}

function spawnstone(){
  //write code here to spawn stone
 if(frameCount % 120 === 0) { 
   var rock = createSprite(600,380,40,10);
   rock.y = random(300,340);
   rock.addImage(stone1_img);
   rock.scale = 0.2;
   rock.velocityX= -4;
 
 
   rock.lifetime = 300;
   player.depth = rock.depth + 1;
   obstacleGroup.add(rock);
   }
  }