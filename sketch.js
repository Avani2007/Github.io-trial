
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paperBall, ground;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)
	paperBall = new Garbage(100,100)
	leftBin = new Rectangles(515, 635, 20, 100)
	rightBin = new Rectangles(605, 635, 20, 100)
	bin = new Dustbin(560,635,110,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  leftBin.display();
  rightBin.display();
  bin.display();
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:53,y:-57})
	}
}