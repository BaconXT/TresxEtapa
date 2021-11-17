        var dinossaur;
         var dino_running;
         var dino_touching;
       var earth_ground;
         var ground;
         var invisibleGround;
          var  nuvemzinha;
          var grupo_nuvens;
         var grupo_obstacles;
       var obstacle1;
          var obstacle2;
          var obstacle3;
          var obstacle5;
          var obstacle6;
          var PLAY  = 1;
          var END =  0;
          var gamestate = PLAY;
          
          
          function preload() {
          dino_running = loadAnimation("trex1.png","trex3.png","trex4.png");      
         cloud_Image = loadImage("cloud.png");
         earth_ground = loadImage("ground2.png");
         obstacle1 = loadImage("obstacle1.png");
          obstacle2 = loadImage("obstacle2.png");
          obstacle3 = loadImage("obstacle3.png");
          obstacle4 = loadImage("obstacle4.png");
          obstacle5 = loadImage("obstacle5.png");
          obstacle6 = loadImage("obstacle6.png");
          }

            function setup() {
            createCanvas(600,200);
            dinossaur =  createSprite(50,180,20,50);
            dinossaur.addAnimation("running",dino_running);
            dinossaur.scale = 0.4;
            dinossaur.x = 50;
            dinossaur.addAnimation("collided",dino_touching );
            ground = createSprite(200,180,400,20);
            ground.addImage("ground",earth_ground);
            ground.x = ground.width /2                  
            invisibleGround = createSprite(200,190,400,10);
            invisibleGround.visible = false;
            grupo_nuvens = createGroup();
            grupo_obstacles = createGroup();

          }
            function draw() {
            background ("grey");
            console.log(dinossaur.y);
            drawSprites();
            
            if (gamestate == PLAY) {
              ground.velocityX = -2;

            }
            
            if (ground.x<0) {
            ground.x = ground.width /2    
            }
            if (keyDown("space") && dinossaur.y>=150) {
            dinossaur.velocityY = -10;

          }
          
          
          dinossaur.velocityY = dinossaur.velocityY +0.8      //gravidade sobre o dinossauro
          
          
          createCloud();
          createObstacle();
          if(grupo_obstacles.isTouching(dinossaur)) {
          gamestate = END;

          }
          
          if (gamestate = END) {
           ground.velocityX=0;
           dinossaur.velocityX=0;
          dinossaur.changeAnimation("collided",dino_touching);
          }
          
          dinossaur.collide(invisibleGround);
          }
          function createCloud() {
          if (frameCount%60 === 0) {
          nuvemzinha = createSprite(600,100);
          nuvemzinha.addImage(cloud_Image);  
          nuvemzinha.velocityX = -3;
          nuvemzinha.scale = 0.5;
          nuvemzinha.y = Math.round(random(30,90))
          nuvemzinha.depth = dinossaur.depth;   
          dinossaur.depth = dinossaur.depth +1;
          grupo_nuvens.add(nuvemzinha);
          nuvemzinha.lifetime = 134;
          }
          }

  function createObstacle() {
      if (frameCount%80 === 0) {
      var obstacle = createSprite(400,165)
      obstacle.velocityX=-6;
      }
      var rand = Math.round(random(1,6))
      switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
       default:       break;

      }



  
  

 

      obstacle.scale = 0.5;
      obstacle.lifetime=300;
      grupo_obstacles.add(obstacle);   

}

