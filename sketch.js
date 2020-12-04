const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 
const World = Matter.World;
const Constraint = Matter.Constraint;

 var bg, world, engine,zombie_Img
 var fireball,slingshot;
 var gamestate="onsling"


 function preload(){ 
     bg = loadImage("sprites/background.png")
     zombie_Img= loadImage("sprites/walk (1).jpg")
     }

  function setup(){
       createCanvas(1450,750);
     engine = Engine.create();
      world = engine.world
      ground=new Ground(300,700,550,500) 
      slingshot = new SlingShot(fireball.body,{x:300, y:50});
      fireball=new Fireball(300,50)
}
      
     

      function draw(){
            background(bg);
           Engine.update(engine);
            ground.display() 
            slingshot.display()
            fireball.display()
            image(zombie_Img,500,500,100,100)

        }

        function mouseDragged(){
            if (gamestate!=="launched"){
            Matter.Body.setPosition(fireball.body, {x: mouseX , y: mouseY});}
        }

        function mouseReleased(){
            gamestate="launched"
            slingshot.fly();
        }