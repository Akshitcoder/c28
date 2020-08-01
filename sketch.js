var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	dustbinImg = loadImage("dustbin.png");	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 590, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	paper=new Paper()
	
	sling = new Slingshot(paper.body,{x:200,y:100})
	dustbin = createSprite(964,520,20,20);
    dustbin.addImage(dustbinImg);
	dustbin.scale = 0.55;
	
	
   
	
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
  Engine.run(engine);
  rect(ground.position.x,ground.position.y,width,10);
 
  paper.display();
  
 sling.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13})
	 }
   }
 function mouseDragged (){

Matter.Body.setPosition (paper.body,{x:mouseX,y:mouseY})


 }
function mouseReleased(){

sling.fly()




}

