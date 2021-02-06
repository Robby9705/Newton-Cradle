
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var aGround;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


var rope1;
var rope2;

var thirdRope;

var rope4;

var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);

    


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	aGround = new ground(400, 150, 700, 60);
	bob1 = new bob(170, 400, 80);
	bob2 = new bob(310, 400, 80);
	bob3 = new bob(450, 400, 80);
	bob4 = new bob(600, 400, 80);
	bob5 = new bob(730, 400, 80);
	rope1 = new rope(bob1.body, aGround.body, -230, 220);
	
	
	rope2 = new rope(bob2.body, aGround.body, -90, 220);
	
	thirdRope = new rope(bob3.body, aGround.body, 50, 220);

	rope4 = new rope(bob4.body, aGround.body, 200, 220);

	rope5 = new rope(bob5.body, aGround.body, 330, 220);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  aGround.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  
  rope2.display();

  thirdRope.display();

  rope4.display();

  rope5.display();
  
}



