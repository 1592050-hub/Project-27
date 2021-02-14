
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob1=new bob(100,100,500,500);
bob2=new bob(100,100,505,500);
bob3=new bob(100,100,510,500);
bob4=new bob(100,100,515,500);
bob5=new bob(100,100,520,500);
rope1=new rope(bobObject1.body,roofObject.body,bobDiameter2,0)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


display()
{ 
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;
	strokeWeight(2);
	var Anchor1X=pointA.X
	var Anchor1Y=pointA.Y
	var ANchor2x=pointB.x+this.OffsetY
	var Anchor2Y=pointB.y+this.offsetY
	SVGPathSegLinetoAbs(Anchor1X,Anchor1Y,Anchor2X,Anchor2y);
	
}
