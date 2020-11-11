
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1Sprite,box2Sprite,paperSprite;
var box1,box2,ground,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	
	box1Sprite=createSprite(630,610,20,100);
	box1Sprite.shapeColor=color("red");
	box2Sprite=createSprite(750,610,20,100);
	box2Sprite.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	var paper_options ={
		restitution: 0
	}
	

	paper = Bodies.circle(100,500,40,paper_options);
    

	Engine.run(engine);
  
}


function draw() {
  background(0); 
  rectMode(CENTER);
  

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}




